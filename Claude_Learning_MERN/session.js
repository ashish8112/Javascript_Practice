const express = require("express");
const app = express();
const session = require("express-session");

app.use(session({
secret:"abc123",
resave:false,
saveUninitialized:false
}))

app.get("/login",(req,res)=>{
    req.session.user={"name":"Ashish","role":"student"};
    res.send("Logged in");
})

app.get("/dashboard",(req,res)=>{
    const user = req.session.user;
    if(user)    // if exists something 
        res.send("Hello "+user["name"]+" welcome to dashboard");
    else
        res.status(401).json({err:"Login first "});
})

app.get("/count",(req,res)=>{
    req.session.count=req.session.count || 0;
    req.session.count=req.session.count+1;
    res.send("You have visited "+req.session.count+" times");
})

app.get("/logout",(req,res)=>{
    if(!req.session.user){
        res.status(200).json({error:"You haven't logged in yet!"})
        return ;
    }
    req.session.destroy((err)=>{
        if(err){
            res.status(500).json({error:err.message});
        return
        }

            res.send("Successfully Logged out !!");
    })
})

app.listen(3000,()=>{
    console.log("Server started");
});



// or 
// const middleware = session({ secret: 'mySecretKey', resave: false, saveUninitialized: false });
// middleware is now a function(req, res, next)

// app.use(middleware); // same thing, just written in one line normally