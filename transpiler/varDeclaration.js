
/**
 * am<I am>: let
 * jmk<Jomok>: const
 * $<dollar>: var
 *
 * @function transpileVarDeclaration 
 * @param {string} code 
 */
exports.transpileVarDeclaration = function (code) {
  return code
  .replace(/am (.+) =/g, (_, variable) => `let ${variable} =`)
  .replace(/jmk (.+) =/g, (_, variable) => `const ${variable} =`)
  .replace(/\$(\w+) = '([^']+)'/g, (_, variable, value) => `var ${variable} = '${value}'`);
}
