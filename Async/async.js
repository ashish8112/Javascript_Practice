const fs = require("fs");
function read(err,data)// To use callback of reading file the function should have two parameter one for error and another for stored content of file or data.
{
    console.log(data);
}
let a=fs.readFile("Async/a.txt","utf-8",read);
console.log("2");
fs.readFile("Async/demo.txt","utf-8",read);
