const express = require("express");
const expSession = require("express-session");
const app  = express();

//session middleware
app.use(expSession({
    resave:false,
    secret:"24wrusfuoiqwur98ufq3tny9",
    saveUninitialized:false
}))

app.get("/login",(req,res)=>{
    req.session.idOfUser=123; //saved on server
    res.send("Logged in user "+req.session.idOfUser);
});

app.get("/dashboard",(req,res)=>{
    if(req.session.idOfUser===123)
        res.send(`welcome user ${req.session.idOfUser}`);
    else 
        res.send("Login first");
})

app.listen(3000);