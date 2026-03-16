const express = require("express");
const app = express();

// Normal route — no error
app.get("/login", (req, res) => {
  res.send("Login page works fine");
});

// This route THROWS an error
app.get("/crash", (req, res) => { // Will be catched by Error handler automatically 
  throw new Error("Database connection failed!");
});

// This route manually PASSES an error using next
app.get("/crash2", (req, res, next) => {
  const err = new Error("User not found!");
  next(err); // manually sending error to error handler
});

// 404 — route not found
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" }); //or const err = new Error ("Route not found"); next(err);
});

// Error handler — catches thrown/passed errors
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message }); 
});

app.listen(2000);