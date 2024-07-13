/**
 * akmw<Aku mawu> -> for loop
 * kpnyh<Kapan yah> -> while
 * kam<c*m> -> do as in do while
 *
 * @function loopDeclarations
 * @param {string} code
 */
exports.transpileLoop = function (code) {
  return code
    .replaceAll(/(akmw|kpnyh) \((.+)\)/g, (_, dec, condition) => `${dec === "akmw" ? "for" : "while"} (${condition})`)
    .replaceAll(/kam \{/g, "do {");
}
