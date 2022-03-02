const mongoose = require("mongoose");

const aircraftSchema = new mongoose.Schema({
    
    type:{
        type: String,
        required: true
    },
    iata_code:{
        type: String
    },
    wing_span:{
        type: Number,
        required: true
    },
    length:{
        type: Number,
        required: true
    },
    cat:{
        type: String,
        default: ""
    }
});


module.exports=mongoose.model("Aircraft", aircraftSchema);