const express = require ("express");
const router = express.Router();
const User = require("../models/User"); 

router.post("/register",async (req,res)=>{
    try{
    const {name,email,password} = req.body; //destructing in key of name,email and password.
    const existingUser = await User.findOne({email});       // email : "abc@1234",
    if(existingUser){
        return res.status(400).json({message:"Email is already Registerd"});
    }
    // await new User({name,email,password}).save();    Decrease Readability. 
    const user = new User ({name,email,password});
    await user.save();  //saving document (row) int collection (table).
    res.status(201).json({message: "User Registerd"});      //201 Created
    }
    catch (err)
    {
        res.status(500).json({error:err.message});
    }
});

router.get("/users",async(req,res)=>{
    try{
         const users = await User.find({});
        res.json({users});
    }
    catch(err)
    {
      res.status(500).json({error:err.message});  
    }
})

router.get("/users/:id",async(req,res)=>{
    try{
    const id = req.params.id;
    const user = await User.findById(id);
    if(!user)
    return res.status(404).json({message:"User doesn't exist"});    //404 Not found
    const {name,email}=user;
    res.json({name,email});
    }
    catch(err)
    {
        res.status(500).json({error:err.message});
    }
})

router.put("/users/:id",async(req,res)=>{
    const id = req.params.id;
    const {bio} = req.body;
    try{
        const user = await User.findById(id);
        if(!user)
            return res.status(404).json({message:"User not found "});
        const updateUser = await User.findByIdAndUpdate(id,{bio},{new:true});//search and update already
        res.json({
            message:"Bio Added ", 
            user:updateUser
        });
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
    }
})

router.delete("/users/:id",async(req,res)=>{
    const id = req.params.id;
    try{
        const user= await User.findById(id);
        if(!user)
            return res.status(404).json({message:"User not found"});
        const userDelete= await User.findByIdAndDelete(id);
        res.status(200).json({message:"User Deleted Succesfully"})
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
    }
})

module.exports = router;