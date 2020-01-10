const lineBot = require('@line/bot-sdk');
const lineNotify = require('./functions/notify');
const configBot = require('./config');
const functions = require('./functions');
const express = require('express');
const bodyParser = require('body-parser');
const clientBot = new lineBot.Client(configBot);
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
      //存id，如果資料庫已經有id的話，不重複新增
      return clientBot.replyMessage(event.replyToken, {
        type: 'text',
        text: '我要存進db=>' + (event.source.type == 'user' ? 'userId:' + event.source.userId : 'groupId:' + event.source.groupId)
      });
    case 'leave':
    case 'memberJoined':
      return clientBot.replyMessage(event.replyToken, {
        type: 'text',
        text: '歡迎阿~~'
      });
    case 'memberLeft':
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

app.get("/regisToken", async (req, res, next) => {
  let code = req.query.code;
  res.sendFile(path.resolve('./functions/notify/res.html'), function (err) {
    if (err) res.send(404);
  });
  // lineNotify.getToken(code)
  // .then((token) => {

  // })
  // .catch((err) => {

  // })
  try {
    let token = await lineNotify.getToken(code);
    console.log(token + '<---------------------------------outside--');
    //存token
  } catch (err) {
    console.log(err);
  }
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
