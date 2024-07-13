const path = require("path");
const fs = require("fs");
const transpiler = require("../transpiler");

const kam = require("../std/console");

const [_, __, file] = process.argv;

function run() {
  if (!file) process.stdout.write("Please provide a file");
  try {
    const code = readfile(file);
    try {
      eval(transpiler(code));
    } catch(e) {
      console.error(e);
    }
  } catch (e) {
    process.stdout.write(`${file} not found`);
  }
}

/**
 * @function readFile
 * @param {string} dir 
 */
function readfile(dir) {
  let pathToScript = path.join(__dirname, "../", dir);
  if (!pathToScript.endsWith(".ambs")) pathToScript += ".ambs";
  return fs.readFileSync(pathToScript).toString();
}

run();
