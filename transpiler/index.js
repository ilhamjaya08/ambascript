const { transpileIfElse } = require("./ifElse");
const { transpileLoop } = require("./loop");
const { transpileMath } = require("./math");
const { transpileVarDeclaration } = require("./varDeclaration");

module.exports = function (code) {
  code = transpileIfElse(code);
  code = transpileVarDeclaration(code);
  code = transpileMath(code);
  code = transpileLoop(code);
  return code;
}
