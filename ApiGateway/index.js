var express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
var app = express();
var router = require('./routers/router')
var bodyParser = require('body-parser');
//var db = require('./db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send("Simple API Gateway")
})

app.use(router)

console.log("Simple API Gateway run on localhost:3000")

app.listen(3000);
// app listen
// app.set("port", process.env.PORT || 3000);
// app.listen(app.get("port"), () => {
//     console.log(`server is running at port ${app.get("port")}`);
// });