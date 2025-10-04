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

//In promise class then(input) is method and i have sent callback name in input so 
// inside then method => this.resolve=input;
// arrow function of constructor of resolve is like -> this.resolve(returnValue) ==> for understanding it converted into 
// this.callback(data) // becuase in resolve() function we have sent argument in function read of readTheFile.

            // we can call without giving argument and with argument that's why resolve can be called without argu and with argu
                                    // function ashish(input)
                                    // {
                                    //     console.log(input);
                                    // }
                                    // ashish();