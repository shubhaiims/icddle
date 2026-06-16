const {
  parseBody,
  recordInteractionPayload,
  sendJson,
  sendMethodNotAllowed,
  sendServerError
} = require("../backend/api/handlers");

module.exports = function handler(req, res) {
  if (req.method !== "POST") {
    return sendMethodNotAllowed(res);
  }

  try {
    return sendJson(res, recordInteractionPayload(parseBody(req.body)));
  } catch (error) {
    return sendServerError(res, "Unable to record interaction", error);
  }
};
