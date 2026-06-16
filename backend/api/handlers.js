const { getDailyCases, recordInteraction } = require("../aiCaseGenerator");

function getHealth() {
  return {
    ok: true,
    service: "icddle-backend-api"
  };
}

function getDailyCasesPayload(query = {}) {
  return getDailyCases({
    userId: query.userId,
    mode: query.mode || "classic"
  });
}

function recordInteractionPayload(body = {}) {
  return recordInteraction(body);
}

function parseBody(body) {
  if (!body) return {};
  if (typeof body === "string") return JSON.parse(body || "{}");
  return body;
}

function sendJson(res, payload, status = 200) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

function sendMethodNotAllowed(res) {
  sendJson(res, { error: "Method not allowed" }, 405);
}

function sendServerError(res, message, error) {
  sendJson(res, { error: message, detail: error.message }, 500);
}

module.exports = {
  getHealth,
  getDailyCasesPayload,
  recordInteractionPayload,
  parseBody,
  sendJson,
  sendMethodNotAllowed,
  sendServerError
};
