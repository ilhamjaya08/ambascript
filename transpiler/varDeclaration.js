
/**
 * am<I am>: let
 *
 * @function transpileVarDeclaration 
 * @param {string} code 
 */
exports.transpileVarDeclaration = function (code) {
  return code.replaceAll(/am (.+) =/g, (_, variable) => `let ${variable} =`);
}
