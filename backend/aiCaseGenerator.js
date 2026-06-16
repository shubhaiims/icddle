const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.join(__dirname, "..");
const STORAGE_DIR = path.join(__dirname, "storage");
const DAILY_DIR = path.join(STORAGE_DIR, "daily");
const USERS_DIR = path.join(STORAGE_DIR, "users");
const INTERACTIONS_FILE = path.join(STORAGE_DIR, "interactions.ndjson");
const TEMPLATES_FILE = path.join(__dirname, "data", "case-templates.json");
const RULES_FILE = path.join(__dirname, "data", "diagnosis-rules.json");

const DAILY_FREE_CASES = 10;

function getDailyCases({ userId, mode = "classic", date = getIndiaDate() }) {
  ensureStorage();
  const safeUserId = sanitizeId(userId || "anonymous");
  const safeMode = mode === "exam" ? "hard" : "classic";
  const dailyPath = getDailyPath(safeUserId, safeMode, date);

  if (fs.existsSync(dailyPath)) {
    return JSON.parse(fs.readFileSync(dailyPath, "utf8"));
  }

  const profile = getUserProfile(safeUserId);
  const templates = JSON.parse(fs.readFileSync(TEMPLATES_FILE, "utf8"));
  const rules = JSON.parse(fs.readFileSync(RULES_FILE, "utf8"));
  const seed = hashSeed(`${safeUserId}:${date}:${safeMode}:${profile.completedCases}`);
  const rng = mulberry32(seed);
  const targetDifficulty = chooseDifficulty(profile, safeMode);
  const ordered = chooseTemplates(templates, profile, targetDifficulty, rng);

  const cases = ordered.slice(0, DAILY_FREE_CASES).map((template, index) => {
    const rule = rules.find((item) => item.id === template.diagnosisId);
    return renderTemplate({
      template,
      rule,
      slot: index + 1,
      date,
      mode: safeMode,
      userId: safeUserId,
      targetDifficulty,
      rng
    });
  });

  const payload = {
    userId: safeUserId,
    date,
    mode: safeMode,
    caseLimit: DAILY_FREE_CASES,
    generatedBy: "local-adaptive-generator-v1",
    profileSummary: summarizeProfile(profile, targetDifficulty),
    cases
  };

  ensureDir(path.dirname(dailyPath));
  fs.writeFileSync(dailyPath, JSON.stringify(payload, null, 2));
  return payload;
}

function recordInteraction(event) {
  ensureStorage();
  const safeUserId = sanitizeId(event.userId || "anonymous");
  const stamped = {
    ...event,
    userId: safeUserId,
    receivedAt: new Date().toISOString()
  };

  fs.appendFileSync(INTERACTIONS_FILE, `${JSON.stringify(stamped)}\n`);
  const profile = getUserProfile(safeUserId);

  if (event.event === "case_completed") {
    profile.completedCases += 1;
    profile.totalAttempts += Number(event.attempts || 0);
    if (event.won) profile.wins += 1;
    if (!profile.byDiagnosis[event.diagnosisId]) {
      profile.byDiagnosis[event.diagnosisId] = { seen: 0, wins: 0, attempts: 0, revisionMisses: 0 };
    }
    const bucket = profile.byDiagnosis[event.diagnosisId];
    bucket.seen += 1;
    bucket.attempts += Number(event.attempts || 0);
    if (event.won) bucket.wins += 1;
  }

  if (event.event === "revision_answered") {
    if (!profile.byDiagnosis[event.diagnosisId]) {
      profile.byDiagnosis[event.diagnosisId] = { seen: 0, wins: 0, attempts: 0, revisionMisses: 0 };
    }
    if (!event.correct) profile.byDiagnosis[event.diagnosisId].revisionMisses += 1;
  }

  profile.updatedAt = new Date().toISOString();
  saveUserProfile(safeUserId, profile);
  return { ok: true, profile: summarizeProfile(profile, chooseDifficulty(profile, event.mode)) };
}

function chooseTemplates(templates, profile, targetDifficulty, rng) {
  const weakIds = getWeakDiagnosisIds(profile);
  const scored = templates.map((template) => {
    let score = rng();
    if (weakIds.includes(template.diagnosisId)) score += 1.25;
    if (targetDifficulty === "easy" && template.difficulty === "easy") score += 0.55;
    if (targetDifficulty === "hard" && template.difficulty !== "easy") score += 0.55;
    return { template, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .map((item) => item.template);
}

function renderTemplate({ template, rule, slot, date, mode, userId, targetDifficulty, rng }) {
  const values = {};
  Object.entries(template.variants || {}).forEach(([key, options]) => {
    values[key] = options[Math.floor(rng() * options.length)];
  });

  const useHardClues = mode === "hard" || targetDifficulty === "hard";
  const clueSource = useHardClues && template.hardClues ? template.hardClues : template.clues;
  const clues = clueSource.map((clue) => fillTokens(clue, values));
  const variantHash = crypto
    .createHash("sha1")
    .update(`${userId}:${date}:${mode}:${template.id}:${JSON.stringify(values)}`)
    .digest("hex")
    .slice(0, 8);

  return {
    id: `${date}-${slot}-${template.id}-${variantHash}`,
    sourceTemplateId: template.id,
    number: slot,
    setting: template.setting,
    focus: template.focus,
    diagnosisId: template.diagnosisId,
    difficulty: useHardClues ? "hard" : "easy",
    generatedFor: { date, mode },
    aiPlan: {
      ruleCode: rule?.code,
      ruleName: rule?.name,
      coreCriteria: rule?.coreCriteria || [],
      questionStyles: rule?.questionStyles || []
    },
    clues,
    explanation: template.explanation,
    differentials: template.differentials,
    learning: template.learning
  };
}

function chooseDifficulty(profile, mode) {
  if (mode === "exam" || mode === "hard") return "hard";
  if (profile.completedCases < 5) return "easy";
  const accuracy = profile.completedCases ? profile.wins / profile.completedCases : 0;
  const averageAttempts = profile.completedCases ? profile.totalAttempts / profile.completedCases : 6;
  if (accuracy > 0.75 && averageAttempts <= 3) return "hard";
  if (accuracy < 0.5 || averageAttempts >= 5) return "easy";
  return "mixed";
}

function getWeakDiagnosisIds(profile) {
  return Object.entries(profile.byDiagnosis || {})
    .filter(([, value]) => value.seen > value.wins || value.revisionMisses > 0 || (value.attempts / Math.max(1, value.seen)) >= 4)
    .map(([diagnosisId]) => diagnosisId);
}

function summarizeProfile(profile, targetDifficulty) {
  const accuracy = profile.completedCases ? Math.round((profile.wins / profile.completedCases) * 100) : 0;
  const averageAttempts = profile.completedCases ? Number((profile.totalAttempts / profile.completedCases).toFixed(1)) : 0;
  return {
    completedCases: profile.completedCases,
    accuracy,
    averageAttempts,
    weakDiagnosisIds: getWeakDiagnosisIds(profile),
    targetDifficulty
  };
}

function getUserProfile(userId) {
  ensureStorage();
  const profilePath = getProfilePath(userId);
  if (fs.existsSync(profilePath)) {
    return JSON.parse(fs.readFileSync(profilePath, "utf8"));
  }
  const profile = {
    userId,
    completedCases: 0,
    wins: 0,
    totalAttempts: 0,
    byDiagnosis: {},
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  saveUserProfile(userId, profile);
  return profile;
}

function saveUserProfile(userId, profile) {
  ensureDir(USERS_DIR);
  fs.writeFileSync(getProfilePath(userId), JSON.stringify(profile, null, 2));
}

function getProfilePath(userId) {
  return path.join(USERS_DIR, `${sanitizeId(userId)}.json`);
}

function getDailyPath(userId, mode, date) {
  return path.join(DAILY_DIR, date, `${sanitizeId(userId)}-${sanitizeId(mode)}.json`);
}

function fillTokens(text, values) {
  return text.replace(/\{(\w+)\}/g, (_, key) => values[key] || "");
}

function getIndiaDate(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);
  const lookup = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${lookup.year}-${lookup.month}-${lookup.day}`;
}

function sanitizeId(value) {
  return String(value).replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 80);
}

function hashSeed(value) {
  const hash = crypto.createHash("sha256").update(value).digest();
  return hash.readUInt32LE(0);
}

function mulberry32(seed) {
  return function next() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function ensureStorage() {
  ensureDir(STORAGE_DIR);
  ensureDir(DAILY_DIR);
  ensureDir(USERS_DIR);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

module.exports = {
  getDailyCases,
  recordInteraction,
  getIndiaDate,
  ROOT
};
