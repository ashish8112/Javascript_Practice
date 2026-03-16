const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

app.post("/login",(req,res)=>{
    const {name} = req.body; // I only want name 
    const user = {
        id:123,         //not adding double quote because I have to respond to client using res.json
        name:name
    }

    const token=jwt.sign(user,"abc1234");
    res.json({token});//becuase token was only string so it create object with key token and string as value 
})
//jwt token contains headers.payload.signature => signature is created using secret key and payload (user,"secret Key ");
app.get("/dashboard",(req,res)=>{
    const token = req.headers["authorization"];
    if(!token){
        res.status(401).send("You are not authorized to access ");
        return;
    }
    try{
        const decoded = jwt.verify(token,"abc1234"); //how is written below
        res.json({message:"welcome "+decoded.name});
    }
    catch(err){
        res.status(401).json({ error: "Invalid or expired token" });
    }
})

app.listen(3000,()=>{
    console.log("Server started");
})


// jwt.verify() uses ONLY the secret key — no database, no memory.
// The token itself contains the data + signature.
// Secret regenerates the signature and checks if it matches.
// If matches → valid. If not → rejected.