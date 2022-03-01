require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const aircrafts = require("./aircrafts");
const userRoutes = require("./routes/users");
const aircraftRoutes = require("./routes/aircrafts-route");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

console.log(aircrafts[0]);

// connect to MongoDB
mongoose.connect(MONGO_URI, {useNewUrlParser: true})
    .then(()=> console.log("MongoDB connected!!"))
    .catch((err)=> console.log(err));

// user routes
app.use("/routes/users", userRoutes);
app.use("/aircrafts", aircraftRoutes);


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});




