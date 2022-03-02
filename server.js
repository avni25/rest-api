require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { MONGO_URI } = require("./config");
const aircrafts = require("./aircrafts");
const userRoutes = require("./routes/users");
const aircraftRoutes = require("./routes/aircrafts-route");
const res = require("express/lib/response");
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// var urlencodedParser = bodyParser.urlencoded({ extended: true });

// connect to MongoDB
mongoose.connect(MONGO_URI, {useNewUrlParser: true})
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




