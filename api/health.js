const { getHealth, sendJson } = require("../backend/api/handlers");

module.exports = function handler(req, res) {
  return sendJson(res, getHealth());
};
