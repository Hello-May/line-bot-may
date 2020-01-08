const lineBot = require('@line/bot-sdk');
const configBot = require('./config');
const functions = require('./functions');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

function handleEvent(event) {
  console.log(event);
  switch (event.type) {
    case 'message':
      switch (event.message.type) {
        case 'text':
          return functions.textCommandSolver(event);
        case 'image':
          return functions.imgCommandSolver(event);
        case 'sticker':
          return functions.stickerCommandSolver(event);
        case 'video':
        case 'audio':
        case 'file':
        case 'location':
      }
    case 'follow':
    case 'unfollow':
    case 'join':
    case 'leave':
    case 'member join':
    case 'member leave':
    case 'postback':
    case 'beacon':
    case 'account link':
    case 'device link':
    case 'device unlink':
    case 'line things scenario execution':
  }
}

app.get("/test", function (req, res) {
  res.send("Hello LineBot");
});

app.get("/button", function (req, res) {
  res.sendFile(path.resolve('./functions/notify/button.html'), function (err) {
    if (err) res.send(404);
  });
});

// app.use(bodyparser.json())
// app.post('/', function(req, res) {
//   // res.json(handleEvent(req.body.event))
//     Promise
//       .all(req.body.events.map(handleEvent))
//       .then(function(result) {
//         res.json(result);
//       });
// })

// const DelayedResponse = require('http-delayed-response');
// function verySlowFunction (callback) {
//   // let's do something that could take a while...
//   console.log('wait');
// }

// app.use(function (req, res) {
//   var delayed = new DelayedResponse(req, res);
//   // verySlowFunction can now run indefinitely
//   verySlowFunction(delayed.start());
// });

app.use(function(req, res, next) {
  var startTime = Date.now();

  res.on('close', function() {
      var duration = Date.now() - startTime;
      console.error('response closed duration=', duration + 'ms', 'statusCode=', res.statusCode, req.method, req.url, 'headers=', req.headers, 'body=', req.body);
  });
  next();
});

app.post('/', lineBot.middleware(configBot), function (req, res) {
Promise
    .all(req.body.events.map(handleEvent))
    .then(function (result) {
      res.json(result);
    });
});

app.listen(process.env.PORT || 8080, function () {
  console.log('App now running on port', this.address().port);
});


// app.listen(process.env.PORT || port, function () {
//   console.log('App now running on port', this.address().port);
// });
