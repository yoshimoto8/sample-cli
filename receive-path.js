const program = require("commander");
const fs = require("fs");

program.parse(process.argv);
const filePath = program.args[0];

fs.readFile(filePath, "utf8", (err, file) => {
  console.log(file);
});
