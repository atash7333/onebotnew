'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

let app = express();

app.set("port", (process.env.PORT || 8000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Display the web page
app.get('/', function (req, res) {
  res.send("hiiiiiiiiiiiiiiiiii");
});


app.get('/webhook', function (req, res) {
  const PAGE_VERIFY_TOKEN = "asdfghjkl;'";

  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
  if (token == PAGE_VERIFY_TOKEN) {
    res.status(200).send(challenge);
  }
  else {
    res.sendStatus(403);
  }
});
app.listen(app.get("port"), function () {
  console.log("ashraf");
});