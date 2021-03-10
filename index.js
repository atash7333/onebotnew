'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

let app = express();

app.set("port", (process.env.port ||  3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));


// Display the web page
app.get('/', function(req, res) {
  res.send("hiiiiiiiiiiiiiiiiii");
});

app.listen(app.get("port"),function () {
     console.log("ashraf");
 });