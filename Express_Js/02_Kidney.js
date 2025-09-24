const express = require("express");
const app = express();

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

app.get("/",function(req,res){
    let johnKidneys=user[0].kidneys;
    const numberOfKidneys = user[0].kidneys.length;
    let numberOfHealthyKidneys=0;
    for(let i=0;i<numberOfKidneys;i++){
            if(user[0].kidneys[i].healthy===true)
                numberOfHealthyKidneys++;
            }
    const numberOfUnhealthyKidneys=numberOfKidneys-numberOfHealthyKidneys;
    res.json({johnKidneys,numberOfHealthyKidneys,numberOfUnhealthyKidneys});

});

app.listen(3000);