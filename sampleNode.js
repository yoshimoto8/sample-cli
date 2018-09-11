// const program = require("commander");
// program.option("--foo <text>");
// program.parse(process.argv);
// const options = program.opts();
// console.log(options.foo);

//get file path
const program = require("commander");
program.parse(process.argv);
const filePath = program.args[0];
console.log(filePath);
