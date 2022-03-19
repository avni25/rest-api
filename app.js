require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require("body-parser");
const aircraftRoutes = require("./routes/aircrafts-route");
const path = require('path');

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
const HOST = process.env.DATABASE_URL || '0.0.0.0';
const client = new MongoClient(HOST, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

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




app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});




