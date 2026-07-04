const express = require("express");
const {createServer} = require("http");
const app = express();
const {Server} = require("socket.io")
const {join} = require("path");

app.use(express.json());
const server = createServer(app);
const io = new Server(server);

io.on("connection",(socket)=>{ //socket is individual client
    const {username} = socket.handshake.auth;
    console.log(username+" connected");
    io.emit("onconnection",username+" connected");

    socket.on("chat",(msg)=>{ //when we got message from that individual client on chat server
    socket.broadcast.emit("chat",msg) //now send this msg to every connect client except sender.
    })
    socket.on("disconnect",()=>{
        socket.broadcast.emit("onconnection",username+" disconnected"); // only to another client not to sender 
    })
})

// app.get("/index",(req,res)=>{
//     res.sendFile(join(__dirname,"public","index.html"))
// })

// app.get("/Initial",(req,res)=>{
//     res.sendFile(join(__dirname,"public","Initial.html"))
// })

app.use(express.static("public")) //http://localhost:3000/index.html and http://localshot:3000/Initial.html

server.listen(3000,()=>{
    console.log("http://localhost:3000/")
})
