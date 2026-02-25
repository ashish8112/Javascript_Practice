const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("route = /");
})
app.get("/profile",(req,res)=>
{
    res.send("Profile route");
})

// app.get("*",(req,res)=>{  //app.get("*", ...) allowed nahi hai
// 👉 //kyunki Express v5 me path-to-regexp library update ho gayi hai
// → * //ko ab valid route pattern nahi maante.
//     res.send("Universal route or all route * ");
// })

//use this 
app.use((req,res)=>{ // Catch all route (Express v5 way)
    res.send("Universal route or all route")
})
app.listen(3000);