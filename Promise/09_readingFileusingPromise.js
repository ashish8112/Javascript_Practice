const fs =require("fs");

 function readFileAsync()
 {
    return new Promise((resolve,reject)=>{  // as we know promise return something after completion it will return or data / content of fie.
        fs.readFile("Promise/a.txt","utf-8",function(err,data){
            if(err)
                reject(err); // reject will send some value we need to catch it somefunction . 
            else
        resolve(data);
        })
    });
 }

 async function solve()
 {
    try{
    const data=await readFileAsync();
    console.log(data);
 }
    catch(error)
    {
        console.log(error);
        // console.log('error ');
    }  
 }
 solve();