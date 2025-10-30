//Creating own http server with memory of my device as database .
// const express = require("express");
import express from "express";
const app = express();

//route handler for / with get method 
app.get("/",function(req,res){
    res.send("Hello World");
})

// route handler for /Ashish
app.get("/Ashish",(req,res)=>res.send("hello Ashish")
)

//route handler for /Name 
let name =  "Ashish Google";
app.get("/Name",(req,res)=>{
    res.send(name);
})

//route handler for / with post method
app.post("/",function(req,res){ // to execute this line we need postman 
    res.send("Post Method using postman");
})

app.listen(443);//http server on port 443 