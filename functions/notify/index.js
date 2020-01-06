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
    return {
        "type": "imagemap",
        "baseUrl": "https://i.postimg.cc/pVQhNS5w/pic3.jpg",
        "altText": "Example imagemap",
        "baseSize": {
            "height": 843,
            "width": 2500
        },
        "actions": [
            {
                "type": "postback",
                "text": "#修練",
                "data": "#修練",
                "areas": {
                    "x": 64,
                    "y": 149,
                    "width": 414,
                    "height": 603
                }
            }
            // {
            //     "type": "uri",
            //     "linkUri": "https://github.com/GoneTone/line-example-bot-php",
            //     "area": {
            //         "x": 0,
            //         "y": 0,
            //         "width": 520,
            //         "height": 1040
            //     }
            // },
            // {
            //     "type": "message",
            //     "text": "Hello",
            //     "area": {
            //         "x": 520,
            //         "y": 0,
            //         "width": 520,
            //         "height": 1040
            //     }
            // }
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