const fs = require("fs");
const file = process.argv[2];//
console.log(file);
const read = fs.readFileSync(file,"utf-8");
console.log(read);
// let count =1;
// for(let i=0;i<read.length;i++)// Drawback in this logic is that we are we are counting spaces not words.
// {
//     if(read[i]==" ")
//        count++;
// }
//console.log(count);
// so convert text -> words array -> count length

const words= read.trim().split(/\s+/);
console.log(words.length);

//The process.argv in node is used to access and interact with the command-line arguments. It is an array that contains the command line arguments and helps user to interact node app using CLI.
//This property returns an array containing the arguments passed to the process when run in the command line.

// process.argv[0]: is the process execution path
// process.argv[1]: is the path for the js file.
// process.argv[2] and more: other items in the array are the additional arguments passed by the user.