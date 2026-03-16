require("dotenv").config({path:"../.env"});// config takes object 
const express=require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());
app.post("/login",(req,res)=>{
    const {name}=req.body;
       const user ={
           "id":1234,
           "name":name
       }
       const token = jwt.sign(user,process.env.secret,{expiresIn:"1h"});//in JavaScript objects, quotes around keys are optional for simple single-word keys.
       res.status(201).json({token});
})

// authHeader.split(' ')  -> Splits the string by space into an array.
//"Bearer eyJhbGci...".split(' ')
// → ["Bearer", "eyJhbGci..."]
//      [0]          [1]
//["Bearer", "eyJhbGci..."][1]
//authHeader && Means "if authHeader exists, then split it." If header is missing, stops before splitting and returns undefined instead of crashing

function verfiyToken(req,res,next)
{
    // Full line
const authHeader = req.headers['authorization']; 
const token = authHeader && authHeader.split(' ')[1]; // "eyJhbGci..."
if (!token) throw new Error("Login expired or token is Empty!");
            try{
                const decoded= jwt.verify(token,process.env.secret);
                req.user = decoded;
                next();
            }
            catch(err){
                throw new Error("Token is not valid ");
            }
}   
app.get("/dashboard",verfiyToken,(req,res)=>{
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