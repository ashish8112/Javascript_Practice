const http = require("http");
console.log("Server Started");
const server =http.createServer(function(req,res){
    res.end("Hello world , I am learning Node Js");
});
server.listen(3000);