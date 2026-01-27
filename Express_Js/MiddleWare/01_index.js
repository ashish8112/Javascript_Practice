const express = require("express");
const app = express();

function isOldEnoughMiddleWare(req,res,next){
const age=req.query.age;
if(age>=14){
    next();// it is calling the next function in get method of /ride 2 route.
}
else{
    res.status(411).json({
        msg:"Sorry you are not able ride "
    })
}
}

app.get("/ride2",isOldEnoughMiddleWare,function(req,res){// before running req,res parameter function .this route will call isOldEnough function.
    res.json({
        msg:"You have Succesffuly ride2"
    })
});

app.get("/ride1",isOldEnoughMiddleWare,function(req,res){
    res.json({
        msg:"You have succesfully ride1"
    })
})
//instead of writing isOldEnoughtMiddleWare in get function you can write 
app.use(isOldEnoughMiddleWare);// it is only attached to below of this line not above http methods. 
// this will automatically bend in http method to , call this function before running main function of that method.

app.get("/ride3",function(req,res){
    res.json({
        msg:"You have successfully ride 3"
    })
})
app.listen(443);