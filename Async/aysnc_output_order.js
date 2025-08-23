let a = require('fs');
let run =a.readFile('demo.txt','utf-8',print);
function print(err,data)
{
    console.log(data);
}

let data =a.readFileSync('a.txt','utf-8');
console.log(data);
console.log("Hello");

