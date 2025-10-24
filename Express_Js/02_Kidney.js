const express = require("express");
const app = express();
const user = [{
    name:"Ashish",
    kidneys:[
        {healthy:true}
    ]
}];
app.use(express.json());

//all route handlers.with method get , put,post and delete and route are localhost:3000/ -> the text starts with / are routes.
// route handler -> app.get("/",function(xyz)){}
app.get("/",function(req,res){
    const totalKidney=user[0].kidneys.length;
    let numberOfHealthyKidneys=0;
    for(let i=0;i<totalKidney;i++)
    {
        if(user[0].kidneys[i].healthy)
            numberOfHealthyKidneys++;
    }
    let unhealthyKidney=totalKidney-numberOfHealthyKidneys;
    res.json({totalKidney,numberOfHealthyKidneys,unhealthyKidney});
});

app.post("/",function(req,res)
{
    const isHealthy=req.body.isHealthy;
    user[0].kidneys.push({
        healthy:isHealthy
    });
    res.json({
        msg:isHealthy+" Kidney Pushed"
    })
});

app.put("/",function(req,res){
    for(let i=0;i<user[0].kidneys.length;i++){
        if(user[0].kidneys[i].healthy!=true)
            user[0].kidneys[i].healthy=true;
    }
    res.json({msg:"All kidneys are healthy now "});
})

app.delete("/",function(req,res){
    const check=checkUnhealthy();
    let newKidney = [];
    if(check)
    {
        for(let i=0;i<user[0].kidneys.length;i++)
        {
            if(user[0].kidneys[i].healthy!=true){
                newKidney.push({
                    healthy:true
                });
            }
        }
        user[0].kidneys=newKidney;
        res.json("All infected kidney removed");
    }
    else{
        res.status(411).json({
            msg:"You have no unhealthy Kidney to remove"
        });
    }
})

function checkUnhealthy()
{
    for(let i=0;i<user[0].kidneys.length;i++)
    {
        if(user[0].kidneys[i].healthy!=true)
            return true;
    }
}

app.listen(3000); // which port like here 3000.
