
/**
 * am<I am>: let
 *
 * @function transpileLetDeclaration 
 * @param {string} code 
 */
exports.transpileLetDeclaration = function (code) {
  return code.replaceAll(/am (.+) =/g, (_, variable) => `let ${variable} =`);
}
