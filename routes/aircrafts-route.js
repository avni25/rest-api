const express = require("express");
const router = express.Router();
const Aircraft = require("../models/aircraft-sch");
const aircrafts = require("../aircrafts");

// get all aircarfts
router.get("/", async(req, res)=>{
    try{
        const aircrafts = await Aircraft.find(); 
        if(!aircrafts) throw Error("No item received!!");
        res.status(200).json(aircrafts);
        console.log(aircrafts);
    }catch(err){
        res.status(400).json({msg:`${err}`});
    }
});

// get one aircraft
router.get("/:id", async (req, res)=>{
    try{
        const aircraft = await Aircraft.findById(req.params.id) 
        if(!aircraft) throw Error("No item received!!");
        res.status(200).json(aircraft);
    }catch(err){
        res.status(400).json({msg:`${err}`});
    }
});

// create user
router.post("/", async (req, res)=>{
    // console.log(req.body);
    const newAircraft = new Aircraft(req.body);
    try{
        const aircraft = await newAircraft.save();
        if(!aircraft) throw Error("can not save new aircraft");
        res.status(200).json({message: "aircraft added", aircraft});
    }catch(err){
        res.status(400).json({msg: `${err}`});
    }
});

router.post("/all", async (req, res)=>{
    Aircraft.collection.insertMany(aircrafts,(err,docs)=>{
        if (err){ 
            return console.error(err);
        } else {
          console.log("Multiple documents inserted to Collection");
        }
    })
});

module.exports = router;