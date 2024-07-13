function kam(...args) {
  return console.log(...args);
}

kam.error = function (...args) {
  return console.error(...args);
}


kam.warn = function (...args) {
  return console.warn (...args);
}

module.exports = kam;
