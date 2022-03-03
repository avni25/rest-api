require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const aircraftRoutes = require("./routes/aircrafts-route");
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = process.env.DATABASE_URL || '0.0.0.0';

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// connect to MongoDB
mongoose.connect(HOST, {useNewUrlParser: true})
    .then(()=> console.log("MongoDB connected!!"))
    .catch((err)=> console.log(err));

// user routes
app.use("/aircrafts", aircraftRoutes);

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
})




app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});




