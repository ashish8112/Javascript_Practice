// Way to create a http server.
// const express = require("express");
// const app= express();
// app.get("/",function(req,res)
// {
//     res.send("rahul");
// });
// app.listen(3001); // this will give  port for http server.

// Now with Some functionality 

const express = require("express");
const app = express(); // creating fresh server.

function sum(n)
{
    let ans=0;
    for(let i=1;i<=n;i++)
    ans=ans+i;
return ans;
}
//req -> Request and res-> Resolve.

//route handlers. like / with methods get
app.get("/",function(req,res){
const n=req.query.k; // input will be fetched by browser after ? like -> localhost:3000/?k=5|| This is a query parameter -> req.query.k
const ans = sum(n);
res.send("Hii your total sum is "+ans);
});

app.listen(3000);// port number 3000
//localhost is name of my machine or use ip address like 
//http://ipadress:portnumber/route.