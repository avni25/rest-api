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
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// connect to MongoDB
mongoose.connect(MONGO_URI, {useNewUrlParser: true})
    .then(()=> console.log("MongoDB connected!!"))
    .catch((err)=> console.log(err));

// user routes
app.use("/aircrafts", aircraftRoutes);

app.get("/", (req, res)=>{
    console.log(req);
    res.sendFile(path.join(__dirname, '/index.html'));
})


app.post('/', urlencodedParser, function (req, res) {
    response = {
       type: req.body.body_type
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});




