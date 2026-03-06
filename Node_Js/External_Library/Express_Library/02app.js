const express = require("express");
const app = express();
//A session lets your server remember a user across multiple requests 
const expressSession = require("express-session"); //sets up session management in your Express app. 
app.use(expressSession({ //Registers the session middleware globally — every request that hits your server will pass through this.
    secret:"random stuff",
    resave:false,
    saveUninitialized:false
}));

app.get("/create",(req,res)=>{
    req.session.polo = true;
    res.send("done");
})

app.get("/check",(req,res)=>{ //Note if sever is restart or down session data will be losed even if you change something nodemon will restart it.
    res.send(req.session.polo);
})

app.listen(3000);
