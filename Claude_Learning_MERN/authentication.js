const express = require("express");
const app = express();

app.use(express.json());

function authentication(req,res,next){
const token = req.headers.token; //Accessing simple stiring dot notation is correct to access but for hypen ex auth-token requires ['auth-token']
if(token==="Ashish")
    next();
else 
    res.status(401).send("You cannot enter ");
}
app.get("/login",authentication,(req,res)=>{
    res.send("Welcome to  the Dashboard");
})

app.listen(3000);


//headers is also an simple object is which is can be attached or send with req object 
// in headers object I have createad key = token and value = "Ashish"  so here I am accessing 
// If token of header is getting matched from here token then I will let user to enter the site . 