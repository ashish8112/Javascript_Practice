const fs= require("fs");
const express=require("express");
const app=express();

app.get("/files/:fileName",function(req,res){ // Note give the file name of this directory not this folder. means write file in  JavaScrpit_Practice folder
    const name= req.params.fileName; 
    console.log(name);
    fs.readFile(name,"utf-8",function(err,data){
        res.json({
            data
        })
    });
});
app.listen(3000);// Now it will run server on specific host or port.


// req.params is an object on the request (req) that holds parameters from the URL's path (also called named route parameters). For instance, in a route like /user/:name, the req.params object would contain req.params.name, holding the value from the URL, such as in /user/Alice, where req.params.name would be Alice