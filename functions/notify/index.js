const lineNotify = require('express-line-notify');
const configNotify = require('../../config/notify');
const clientNotify = lineNotify(configNotify);
const unirest = require('unirest');

const notify = (output) => {
    let req = unirest('POST', configNotify.notifyApi)
        .headers({
            'Authorization': 'Bearer ' + configNotify.accessToken,
            'Content-Type': 'multipart/form-data; boundary=--------------------------054153815016971257363988'
        })
        .field(output.type, output.text)
        .end(function (res) {
            if (res.error) throw new Error(res.error);
            console.log(res.raw_body);
        });
}

const richMenu = () => {
    return message = {
        "type": "imagemap",
        "baseUrl": "https://ibb.co/n8jvYn4#",
        "altText": "在不支援顯示影像地圖的地方顯示的文字",
        "baseSize": {
          "height": 1040,
          "width": 1040
        },
        "actions": [
          {
            "type": "uri",
            "linkUri": "https://www.kamigo.tw/",
            "label": "https://www.kamigo.tw/",
            "area": {
              "x": 0,
              "y": 0,
              "width": 520,
              "height": 1040
            }
          },
          {
            "type": "message",
            "text": "傳送文字",
            "area": {
              "x": 520,
              "y": 0,
              "width": 520,
              "height": 1040
            }
          }
        ]
      }
    
    
    // {
    //     "type": "flex",
    //     "altText": "Flex Message",
    //     "contents": {
    //         "type": "bubble",
    //         "direction": "ltr",
    //         "footer": {
    //             "type": "box",
    //             "layout": "horizontal",
    //             "contents": [
    //                 {
    //                     "type": "button",
    //                     "action": {
    //                         "type": "uri",
    //                         "label": "小怪獸選單",
    //                         "uri": "line://app/1653656986-4q83mqvK"
    //                     }
    //                 }
    //             ]
    //         }
    //     }
    // }
}

const authorize = () => {
    return {
        "type": "flex",
        "altText": "Flex Message",
        "contents": {
            "type": "bubble",
            "direction": "ltr",
            "footer": {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                    {
                        "type": "button",
                        "action": {
                            "type": "uri",
                            "label": "按此連動 Line Notify",
                            "uri": "line://app/1653656986-Nv8qOjMl"
                        }
                    }
                ]
            }
        }
    }
}

module.exports = {
    notify,
    authorize,
    richMenu
}