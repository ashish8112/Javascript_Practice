const express=require("express");
const app= express();

function ageCheck(age){
if(age>=14)
    return true;
else 
    return false;
}

app.get("/",function(req,res){
    if(ageCheck(req.query.age))
    {
        res.json({
            message:"You have succesfully rode 1"
        });
    }
    else{
        res.status(411).json({
            msg:"Sorry You are not of age yet "
        });
        return;
    }
})

app.listen(443);
