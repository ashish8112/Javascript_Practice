const express = require("express");
const router = express.Router();
const User = require("../models/User"); 

router.post("/register",async (req,res)=>{
    const {name,email,password} = req.body; //destructing in key of name,email and password.
    const user = new User ({name,email,password});
    await user.save();  //saving document (row) int collection (table).
    res.json({message: "User Registerd"});
});

module.exports = router;