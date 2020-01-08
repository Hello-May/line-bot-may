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

// app.listen(process.env.PORT || 8080, function () {
//   console.log('App now running on port', this.address().port);
// });


// const extendTimeoutMiddleware = (req, res, next) => {
//   const space = ' ';
//   let isFinished = false;
//   let isDataSent = false;

//   // Only extend the timeout for API requests
//   if (!req.url.includes('/api')) {
//     next();
//     return;
//   }

//   res.once('finish', () => {
//     isFinished = true;
//   });

//   res.once('end', () => {
//     isFinished = true;
//   });

//   res.once('close', () => {
//     isFinished = true;
//   });

//   res.on('data', (data) => {
//     // Look for something other than our blank space to indicate that real
//     // data is now being sent back to the client.
//     if (data !== space) {
//       isDataSent = true;
//     }
//   });

//   const waitAndSend = () => {
//     setTimeout(() => {
//       // If the response hasn't finished and hasn't sent any data back....
//       if (!isFinished && !isDataSent) {
//         // Need to write the status code/headers if they haven't been sent yet.
//         if (!res.headersSent) {
//           res.writeHead(202);
//         }

//         res.write(space);

//         // Wait another 15 seconds
//         waitAndSend();
//       }
//     }, 15000);
//   };

//   waitAndSend();
//   next();
// };

// app.use(extendTimeoutMiddleware);

const DelayedResponse = require('http-delayed-response');

app.post('/', lineBot.middleware(configBot), function (req, res,next) {
  function slowfunction() {
  return Promise
    .all(req.body.events.map(handleEvent))
    .then(function (result) {
      res.json(result);
    });
  }
    const delayed = new DelayedResponse(req, res, next);
    slowfunction(delayed.start(31 * 1000, 31 * 1000));
});

app.listen(process.env.PORT || port, function () {
  console.log('App now running on port', this.address().port);
});
