//Creating own http server with memory of my device as database .
// const express = require("express");
//what is express?
// Express is built on top of Node.js, which means it leverages Node.js's ability to run JavaScript on the server-side. 
// This allows developers to use a single language (JavaScript) for both front-end and back-end development.
// import express from "express";// It is possible but dont use this . 
const express = require("express");
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
    res.send("Post Method using postman");// send use for plain text
})

app.listen(443);//http server on port 443 

//We can send only one data to server or client not two or more 

app.get("/Check",function(req,res){
    res.send({ // Object of Js in plain text
        mesg:"Hello"
    });
    // res.send({ // This will not send to  client or server becuase we can send only on resolve
    //     message:"Hello World"
    // }) 
})

app.get("/html",function(req,res){
    res.send("<input type='text'><button>Submit</button>");//using send i can send html 
})

app.get("/Json",function(req,res){
    res.json({  //using json i can set json message.
        name:"Ashish Kr.Shukla"
    })
})