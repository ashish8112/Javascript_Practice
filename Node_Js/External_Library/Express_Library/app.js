const express = require("express");
const app = express ();

app.get("/",(req,res)=>{
    res.send("Hello World from express");
    console.log(req);

})
//try this http://localhost:3000/Ashish?k=<br><input type="text"><br><button>Submit</button>
app.get("/Ashish",(req,res)=>{
    const n = req.query.k;
    res.send("Hello "+n);
})
app.listen(3000);