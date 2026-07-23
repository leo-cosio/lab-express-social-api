const pino = require("pino");
const config = require("./config");

module.exports = pino({
  formatters: {
    level(label) {
      return { level: label };
    },
  },
}).child({
  service: config.get("build.service"),
  version: config.get("build.version"),
});
