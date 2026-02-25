                        //MiddleWare

const express = require("express");
const app = express();

app.use(function(req,res,next){
    console.log("Hello from Middleware");
    next();
})

app.get("/profile",(req,res)=>{
    res.send("Middleware has forwaded your request here,\nYou are accessing Profile");
})
app.listen(3000);