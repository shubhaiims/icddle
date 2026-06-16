const http = require("http");
const fs = require("fs");
const path = require("path");
const {
  getDailyCasesPayload,
  getHealth,
  recordInteractionPayload
} = require("./backend/api/handlers");

const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".png": "image/png",
  ".ico": "image/x-icon"
};

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === "GET" && url.pathname === "/api/health") {
      return sendJson(res, getHealth());
    }

    if (req.method === "GET" && url.pathname === "/api/daily-cases") {
      return sendJson(res, getDailyCasesPayload(Object.fromEntries(url.searchParams.entries())));
    }

    if (req.method === "POST" && url.pathname === "/api/interactions") {
      const body = await readJson(req);
      return sendJson(res, recordInteractionPayload(body));
    }

    if (req.method !== "GET") {
      return sendJson(res, { error: "Method not allowed" }, 405);
    }

    return serveStatic(url.pathname, res);
  } catch (error) {
    return sendJson(res, { error: "Server error", detail: error.message }, 500);
  }
});

server.listen(PORT, () => {
  console.log(`ICDdle India running at http://localhost:${PORT}`);
});

function serveStatic(pathname, res) {
  const requested = pathname === "/" ? "/index.html" : pathname;
  const cleanPath = path.normalize(decodeURIComponent(requested)).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(ROOT, cleanPath);
  const relative = path.relative(ROOT, filePath);

  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    return sendJson(res, { error: "Not found" }, 404);
  }

  fs.readFile(filePath, (error, data) => {
    if (error) return sendJson(res, { error: "Not found" }, 404);
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
    res.end(data);
  });
}

function sendJson(res, payload, status = 200) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1_000_000) {
        req.destroy();
        reject(new Error("Request body too large"));
      }
    });
    req.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (error) {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}
