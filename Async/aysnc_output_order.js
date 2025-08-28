let a = require('fs');
let run =a.readFile('Async/demo.txt','utf-8',print);
function print(err,data)
{
    console.log(data);
}

let data =a.readFileSync('Async/a.txt','utf-8');
console.log(data);
console.log("Hello");

