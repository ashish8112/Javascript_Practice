const http = require("http");

// server = http.createServer(function(req,res){//Pehle req aata hain isliye req is first parameter.
//     res.end("hello");
//     // console.log(req); // lots of data 
//     console.log(req.url);
// })

server = http.createServer(function(req,res){
    if(req.url==="/")
        res.end("Hello");
    else if(req.url==="/profile")
        res.end("Profile Page");
    else 
        res.end("Page not found");
})
server.listen(3000);