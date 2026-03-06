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

app.get("/login/:id",(req,res)=>
{
    const id =  req.params.id;
    //res.send("user id : ${id}"); // ❌ Output: user id : ${id}
    //Using double quotes "" or single quotes '' will treat ${id} as plain text — no interpolation happens. You'll literally see ${id} in the browser. so use Template literals ONLY work with backticks ` res.send(`user id : ${id}`); 
    res.send("User id : "+id);
})
app.listen(3000);