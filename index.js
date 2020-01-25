const lineBot = require('@line/bot-sdk');
const lineNotify = require('./functions/notification');
const configBot = require('./config');
const functions = require('./functions');
const postback = require('./functions/postback');
const express = require('express');
const bodyParser = require('body-parser');
const clientBot = new lineBot.Client(configBot);
const dbController = require('./functions/dbController');
const dbMonster = require('./functions/dbController/monster');
const path = require('path');
const app = express();
const dbUser = require('./functions/dbController/user');
const uuidV4 = require('uuid/v4');

async function handleEvent(event) {
  console.log(event);
  let userId = (event.source.type == 'user' ? event.source.userId : event.source.groupId);
  let user = await dbUser.searchById(userId);
  // console.log("user:" + JSON.stringify(user));
  let status;
  if (user !== undefined) {
    status = user.status;
  }
  if (event.type === 'message' && event.message.text !== '呼叫' && status === '睡眠') {
    return;
  }
  switch (event.type) {
    case 'message':
      switch (event.message.type) {
        case 'text':
          // return functions.textCommandSolver(event).catch(err=>{console.log(err)});
          return functions.textCommandSolver(event, status);
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
    case 'join':
      return dbController.saveId(event);
    case 'memberJoined':
      return clientBot.replyMessage(event.replyToken, {
        type: 'text',
        text: '歡迎阿~~'
      });
    case 'postback':
      return postback.postbackCommandSolver(event, status);
    case 'unfollow':
    case 'leave':
    case 'memberLeft':
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
  res.sendFile(path.resolve('./functions/notification/button.html'), function (err) {
    if (err) res.send(404);
  });
});

app.get("/get", function (req, res) {
  res.sendFile(path.resolve('./test/get.html'), function (err) {
    if (err) res.send(404);
  });
});

app.get("/send", function (req, res) {
  res.sendFile(path.resolve('./test/send.html'), function (err) {
    if (err) res.send(404);
  });
});

// app.post("/saveimage", function (req, res) {
//   function saveImage(data, filename) {
//     var matches = data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/), imageBuffer = {};
//     if (matches.length !== 3) {
//       return new Error('無效的影像編碼');
//     }

//     imageBuffer.type = matches[1];
//     imageBuffer.data = new Buffer(matches[2], 'base64');

//     require('fs').writeFile('/path/to/' + filename, imageBuffer.data, function (err) {
//       if (err) {
//         console.error(err);
//       }
//       console.log('file ' + filename + ' saved.')
//     });
//   }
// });

// app.post("/saveimage",
//   upload.single("file" /* name attribute of <file> element in your form */),
//   (req, res) => {
//     const tempPath = req.file.path;
//     const targetPath = path.join(__dirname, "./imgs/image.png");

//     if (path.extname(req.file.originalname).toLowerCase() === ".png") {
//       fs.rename(tempPath, targetPath, err => {
//         if (err) return handleError(err, res);

//         res
//           .status(200)
//           .contentType("text/plain")
//           .end("File uploaded!");
//       });
//     } else {
//       fs.unlink(tempPath, err => {
//         if (err) return handleError(err, res);

//         res
//           .status(403)
//           .contentType("text/plain")
//           .end("Only .png files are allowed!");
//       });
//     }
//   });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/saveimage", async function (req, res) {
  console.log(req);
  console.log("-------------------");
  let data = req.body.image;
  console.log(data + "<------data");
  let matches = data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/), imageBuffer = {};
  if (matches.length !== 3) {
    // res.send('無效的影像編碼');
    console.log('無效的影像編碼');
  }

  // let data = req.form.data;
  let imgName = uuidV4();

  imageBuffer.type = matches[1];
  imageBuffer.data = new Buffer(matches[2], 'base64');

  require('fs').writeFile('/imgs' + imgName, imageBuffer.data, function (err) {
    if (err) {
      console.error(err);
    }
    console.log('file ' + imgName + ' saved.')
  });

  res.send(imgName, function (err) {
    if (err) res.send(404);
  });
});

// app.get("/image.png", (req, res) => {
//   res.sendFile(path.join(__dirname, "./imgs/image.png"));
// });

app.get("/regisToken", async (req, res, next) => {
  let code = req.query.code;
  res.sendFile(path.resolve('./functions/notification/res.html'), function (err) {
    if (err) res.send(404);
  });
  // lineNotify.getToken(code)
  // .then((token) => {
  // })
  // .catch((err) => {
  // })
  try {
    let token = await lineNotify.getToken(code);
    dbController.saveToken(token);
  } catch (err) {
    console.log(err);
  }
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
