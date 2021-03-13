'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
const PAGE_ACCESS_TOKEN = "EAAD5iuN9k9UBAEOXH6Sp3VCZAmv2FjCKZAnuZAd0VBpeIZBqoxbZCDdl6xKqApOo4GP05jAP8So8nHlDk6YZC5PgDZCOZAZATbZCGXPHkgCNr1XGA5el1XvxSdbTs9QECNORDjloDZA58a3EYEI04YOgxQ7SM7lVLtlDwvuJJRigafBkyZCdWqdmFqgcIJZBQlNEuyFUZD"


app.set("port", (process.env.PORT || 8000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Display the web page
app.get('/', function (req, res) {
  res.send("hiiiiiiiiiiiiiiiiii");
});

app.get('/setup', function (req, res) {
  setupGreetingText();
  getStarted();
  res.send("doneeeeeee11");
});
function getStarted() {
  var data = {
    "get_started": {
      "payload": "GET_STARTED_PAYLOAD"
    }
  };

  request(
    {
      url: "https://graph.facebook.com/v7.0/me/messages_profile?access_token=" + PAGE_ACCESS_TOKEN,
      method: "POST",
      Headers: { "Content-Type": "application/json" },
      form: data
    },
    function (error, response, body) {
      console.log(response);
      console.log(body);
    }
  )
}
function setupGreetingText() {
  var data = {
    "greeting": [
      {
        "locale": "default",
        "text": "Hello {{user_first_name}}! adddddd"
      }
    ]
  };

  request(
    {
      url: "https://graph.facebook.com/v7.0/me/messages_profile?access_token=" + PAGE_ACCESS_TOKEN,
      method: "POST",
      Headers: { "Content-Type": "application/json" },
      form: data
    },
    function (error, response, body) {
      console.log(response);
      console.log(body);
    }
  )
}

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