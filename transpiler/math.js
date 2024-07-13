/**
 * 
 * tam(a, b) used for addition
 * kur(a, b) used for subtraction
 * kal(a, b) used for multiplication
 * bag(a, b) used for division
 * 
 * @function transpileMath
 * @param {string} code 
 */
exports.transpileMath = function (code) {
    return code
      .replaceAll(/tam\((.+?),\s*(.+?)\)/g, (_, a, b) => `(${a}) + (${b})`)
      .replaceAll(/kur\((.+?),\s*(.+?)\)/g, (_, a, b) => `(${a}) - (${b})`)
      .replaceAll(/kal\((.+?),\s*(.+?)\)/g, (_, a, b) => `(${a}) * (${b})`)
      .replaceAll(/bag\((.+?),\s*(.+?)\)/g, (_, a, b) => `(${a}) / (${b})`);
  }
  