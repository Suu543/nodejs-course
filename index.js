const { readFileSync, writeFileSync } = require("fs");

console.log("Start");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
