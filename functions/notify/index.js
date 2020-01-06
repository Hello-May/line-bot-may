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
                "type": "message",
                "text": "#修煉",
                "area": {
                    "x": 64,
                    "y": 149,
                    "width": 414,
                    "height": 603
                }
            },
            {
                "type": "message",
                "text": "#任務",
                "area": {
                    "x": 506,
                    "y": 149,
                    "width": 430,
                    "height": 607
                }
            },
            {
                "type": "message",
                "text": "#小怪獸",
                "area": {
                    "x": 961,
                    "y": 145,
                    "width": 566,
                    "height": 611
                }
            },
            {
                "type": "message",
                "text": "#戰鬥",
                "area": {
                    "x": 1554,
                    "y": 141,
                    "width": 440,
                    "height": 615
                }
            },
            {
                "type": "message",
                "text": "#酒館",
                "area": {
                    "x": 2022,
                    "y": 141,
                    "width": 418,
                    "height": 615
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