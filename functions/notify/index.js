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
const test = () => {
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
                            "uri": "https://liff-paint-th.line-apps.com/"
                        }
                    }
                ]
            }
        }
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
                            "label": "PAINT SOMETHING",
                            "uri": "line://app/1653656986-EoA24gla"
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
    test
}