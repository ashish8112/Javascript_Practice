const express = require("express"); // Importing express framework in Node.js .
const app = express(); // require is used to return function like above and that creates internally one **Express application object**.
// Now all methods of express is in app object so we can use app.get(),app.use(),app.post() etc.  
const user = [{
    name:"John",
    kidneys: [{
        healthy:false
        }]
}];


// app.get("/",function (req,res){
//     let johnKidneys = user[0].kidneys;
//     console.log(johnKidneys);
// })

// app.listen(3000);

app.use(express.json()); 
app.get("/",function(req,res){ // get is used to read the data. 
    const numberOfKidneys = user[0].kidneys.length; // In every api call like post or delete this line or this block execute agin .
    let numberOfHealthyKidneys=0;
    for(let i=0;i<numberOfKidneys;i++){
            if(user[0].kidneys[i].healthy===true)
                numberOfHealthyKidneys++;
            }
    const numberOfUnhealthyKidneys=numberOfKidneys-numberOfHealthyKidneys;
    res.json({numberOfKidneys,numberOfHealthyKidneys,numberOfUnhealthyKidneys});

});

app.post("/",function(req,res){ // post is used to create new data or new data.
    const isHealthy=req.body.isHealthy; // This is body query so in postman i need to write body is { isHealthy= true } for healthy and false for unhealthy.
    user[0].kidneys.push({
        healthy:isHealthy // we can give only boolean input because healthy is global variable in user array.
    })
    res.json({      // JSON -> JavaScript Object Notation.
        msg:isHealthy+" Kidney pushed!"
    });
});

//put is used to update existing data.
app.put("/",function(req,res){ // There is no body query so although anything written in body will it will affect this .
    for(let i=0;i<user[0].kidneys.length;i++)// This function will convert all unhealthy to healthy kidney.
    {
        if(user[0].kidneys[i].healthy!==true)
            user[0].kidneys[i].healthy=true;
    }
    res.json({});
})

//Only if atleast one unhealthy kidney is there do this, else return 411 and status code depends on programmer what he/she wants to give.
app.delete("/",function(req,res){
    let checkUnhealthy=atleastOneunhealthy();
    if(checkUnhealthy>0){
    const newKidney =[];
    for(let i=0;i<user[0].kidneys.length;i++)
    {
        if(user[0].kidneys[i].healthy===true)
            newKidney.push({
                    healthy:true
        })
    }
    user[0].kidneys=newKidney;
    res.json({
        msg:"Unhealthy Kidney Removed!"
    });
                            }
    else{
        res.status(411).json({
            msg:"You have no unhealthy Kidney to remove"
        })
    }
})
function atleastOneunhealthy()
{
    let unhealthy=0;
    for(let i=0;i<user[0].kidneys.length;i++)
    {
        if(user[0].kidneys[i].healthy===false)
        {
            unhealthy=1;
            return unhealthy;
        }
        
    }
}
app.listen(3000);
