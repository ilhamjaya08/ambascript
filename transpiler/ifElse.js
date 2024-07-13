/*
 * ba <about>: if
 * batu <about to>: else if
 * tu <to>: else
 */
const TranspileTable = {
  batu: "else if",
  ba: "if",
  tu: "else"
};

/**
 * @function transpileIfElse
 * @param {string} code 
 */
exports.transpileIfElse = function (code) {
  return code
    .replaceAll(/(batu|ba) (.+) \{/g, (_, rep, condition) => `${TranspileTable[rep] ?? rep} ${condition} {`)
    .replaceAll(/tu \{/g, _ => `else {`);
}
