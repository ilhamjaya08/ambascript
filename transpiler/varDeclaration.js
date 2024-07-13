
/**
 * am<I am>: let
 *
 * @function transpileVarDeclaration 
 * @param {string} code 
 */
exports.transpileVarDeclaration = function (code) {
  return code
  .replace(/am (.+) =/g, (_, variable) => `let ${variable} =`)
  .replace(/jmk (.+) =/g, (_, variable) => `const ${variable} =`)
  .replace(/var (.+) =/g, (_, variable) => `var ${variable} =`);
}
