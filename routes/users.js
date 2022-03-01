const express =require("express");
const User = require("../models/user");
const router = express.Router();

// get all users
router.get("/", async (req, res)=>{
    try{
        const users = await User.find(); 
        if(!users) throw Error("No item received!!");
        res.status(200).json(users);
    }catch(err){
        res.status(400).json({msg:`${err}`});
    }
});

// get one user
router.get("/:id", async (req, res)=>{
    try{
        const user = await User.findById(req.params.id) 
        if(!user) throw Error("No item received!!");
        res.status(200).json(user);
    }catch(err){
        res.status(400).json({msg:`${err}`});
    }
});

// create user
router.post("/", async (req, res)=>{
    // console.log(req.body);
    const newUser = new User(req.body);
    try{
        const user = await newUser.save();
        if(!user) throw Error("can not save new user");
        res.status(200).json({message: "user added", user});
    }catch(err){
        res.status(400).json({msg: `${err}`});
    }
});

// update user
router.patch("/:id", async (req, res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body);        
        if(!user) throw Error("unable to update user!!");
        res.status(200),json({success: true});
    }catch(err){
        res.status(400).json({msg: `${err}` });
    }
});

// delete user
router.delete("/:id", async (req, res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) throw Error("no user found!!");
        res.status(200).json({success: true})
    }catch(err){
        res.status(400).json({msg: `${err}`  });
    }
});



module.exports = router; 