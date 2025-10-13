const fs=require("fs");
function read(resolve,reject)
{
    fs.readFile("a.txt","utf-8",(data,err)=>{
        if(data)
            return resolve(data);
        else
            return reject(err);
    })
}

let p=new Promise(read);
p.then(callback).catch(err);
function callback(content)
{
    try{
        console.log(content);
    }
    catch(error){
        console.log(error);
    }
}
function err(error)
{
    console.log(error);
}