require('dotenv').config({ path: "../.env" });// either run from root folder where env file is or write env file here or give actuall path 
const express = require("express");  //note: don't use ctrl + space run manually by moving to this Adusa folder or give actuall path in path
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

app.post("/login",(req,res)=>{
    //require payload(data of user)
    //taking input from postman
    const {name}=req.body;
    const user ={
        "id":1234,
        "name":name
    }
    const token = jwt.sign(user,process.env.secret);
    res.status(201).json({token});
})

function authentication (req,res,next)
{
    const token = req.headers['authorization'];
    if(!token)
        throw new Error("Login expired or token is Empty!");
    try{
        const decoded= jwt.verify(token,process.env.secret);
        req.user = decoded;
        next();
    }
    catch(err){
        throw new Error("Token is not valid ");
    }
}

app.get("/dashboard",authentication,(req,res)=>{
    const {name}=req.user;
    res.status(200).json({message:"Hello"+" "+name});
})

function errorHandling(err,req,res,next)
{
console.error(err.message);
res.status(401).json({error:err.message});
}

app.use(errorHandling);

app.listen(3000,()=>{
console.log("Server is started");
});