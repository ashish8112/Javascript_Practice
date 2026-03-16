const express = require("express");
const app = express();

app.use((req,res,next)=>{
    // console.log(new Date().toISOString()+" "+req.method+" "+req.url);
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
})

app.get("/login",(req,res)=>{
  res.send("Welcome to login page");
})
const port = 3000;
app.listen(port,()=>{
    console.log("Sever Started");
})