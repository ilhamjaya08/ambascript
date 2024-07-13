const { transpileIfElse } = require("./ifElse");
const { transpileVarDeclaration } = require("./varDeclaration");

module.exports = function (code) {
  code = transpileIfElse(code);
  code = transpileVarDeclaration(code);
  return code;
}
