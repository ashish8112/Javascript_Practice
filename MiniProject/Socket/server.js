const path = require("path")
const express = require("express")
const app = express();
const http = require("http");
const {Server} = require("socket.io");

const server = http.createServer(app);

const io = new Server(server);
io.on("connection",(socket)=>{
    console.log("a user connected")
   socket.on("disconnect",()=>{
    console.log("user disconnected")
   })
   socket.on("chat message",(message)=>{
    console.log(message);
    io.emit("chat message",message);
   })
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

server.listen(3000,()=>{
    console.log("Server Started");
})
