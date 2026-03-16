const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

//Mannual checking and hard coding 
app.get("/login",(req,res)=>
{
    const user = {
        "id":123,
        "Name":"Ashish"
    };
    const token =jwt.sign(user,"abc123");//token is string .
    console.log(token);
    res.json({token});// sends: { "token": "eyJhbGci..." } ← proper JSON object
    //res.json(token)        // sends: "eyJhbGci..."  ← just a raw string
})

app.get("/dashboard",(req,res)=>{
    const token = req.headers['authorization'];
    try{
        const decoded=jwt.verify(token,"abc123");
        console.log(decoded);
        res.json({decoded});
    }
    catch(err)
    {
        console.log("error");
    }
})

app.listen(3000);