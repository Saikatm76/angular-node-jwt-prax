const { debug } = require('console');
const express = require('express');
const bodyParser = require("body-parser");
const { createScanner } = require('typescript');

const mongoose = require('mongoose');

const authRoutes = require("./routes/auth");


const app = express();

//password = PN5touHc2acV8I3T;

const url = "mongodb+srv://saikat76:PN5touHc2acV8I3T@cluster0.b6dhwxu.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected to database!");
    })
    .catch(() => {
        console.log("connection failed!");
    });



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
    next();
});


app.use("/api/auth", authRoutes);

module.exports = app;