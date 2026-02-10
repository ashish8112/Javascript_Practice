const fs = require("fs");

//Create a file using asynchronous function.

data = "Hello World";
fs.writeFile("Hello.txt",data,function(err){
    if(err)console.error(err.message);
    else console.log("Done!");
})

//Append in a file 

fs.appendFile("Hello.txt","I am learning NodeJs",err=>{
    if(err)console.error(err.message);
    else console.log("Added!");
})

//Copy file
fs.copyFile("hello.txt","./Added/New.txt",err=>{ //Insted of hello.txt we can give ./hello.txt
    if(err)console.error(err.message);
    else console.log("File Copied with Name New.txt");
})

//Delete file
fs.unlink("./Added/New.txt",function(err){ //Used to Delete the file 
    if(err)console.error(err.message);
    else console.log("File is Deleted ");
})

//Delete Empty Directory/Folder
fs.rmdir("./BlankFolder",function(err){ //
    if(err)console.error(err.message)
        else console.log("BlankFolder Deleted");
})

fs.rmdir("./Added",function(err){ //Note It will throw error becuz Folder is not empty so below option.
    if(err)console.error(err.message);
    else console.log("File Copied with Name New.txt");
})

//Delete Non-Empty Directory
fs.rmdir("./Added",{recursive:true},function(err){ //Note rmdir is going to depreciated use rm in future.
    if(err)console.err(err.message);
    else console.log("Non-Empty Folder deleted");
})

fs.readFile("./Hello.txt","utf-8",callback);

function callback(err,data)
{
    if(err)
        console.log("error");
    else
        console.log(data);
}

// Folder Creation
fs.mkdir("./Ashish",function(err){
    if(err)console.err(err.message);
    else
        console.log("Ashish Folder Created");
})

//Read Folder 

fs.readdir("./Added",(err,file)=>{
    if(err)console.err(err.message);
    else console.log(file);
})