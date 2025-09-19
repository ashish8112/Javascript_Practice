const fs=require ('fs');
function readTheFile(sendTheFinalValueHere){
    fs.readFile("a.txt","utf-8",read);
    function read(err,data)
    {
        sendTheFinalValueHere(data);// promise return something so it is returning data into callback function parameter.
    }
}

function readFile()
{
    return new Promise(readTheFile); 
}
const p= readFile();
function callback(content)
{
    console.log(content);
}

p.then(callback);