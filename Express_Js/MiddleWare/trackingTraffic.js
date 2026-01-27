//In this Program I will create global middleware which will track number of user logged in my server .
const express=require("express");
const app = express();

let user=0;

app.use(function(req,res,next){
    user++;
    next();
});

app.get("/user",function(req,res){
    res.send(user);
})
;
app.post("/user",function(req,res){
    res.json({
        msg:"Dummy Post",
        total_user:user
    })
});

app.get("/count",function(req,res){
    res.json({
        user
    })
})

app.listen(3000);