const {
  getDailyCasesPayload,
  sendJson,
  sendMethodNotAllowed,
  sendServerError
} = require("../backend/api/handlers");

module.exports = function handler(req, res) {
  if (req.method !== "GET") {
    return sendMethodNotAllowed(res);
  }

  try {
    return sendJson(res, getDailyCasesPayload(req.query));
  } catch (error) {
    return sendServerError(res, "Unable to generate daily cases", error);
  }
};
