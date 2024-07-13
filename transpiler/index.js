const { transpileIfElse } = require("./ifElse");
const { transpileLetDeclaration } = require("./letDeclaration");

module.exports = function (code) {
  code = transpileIfElse(code);
  code = transpileLetDeclaration(code);
  return code;
}
