const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render('index')
});

app.post("/", (req, res) => {
    const name = req.body.name;
    const code = req.body.code;
});

app.get("/qrcode/:code", (req, res) => { 
    const code  = req.params.code;

});

app.listen(3000, () => {
  console.log("Corriendo en puerto 3000");
});
