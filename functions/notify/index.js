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
                            "label": "PAINT SOMETHING",
                            "uri": "https://liff-paint-th.line-apps.com/"
                        }
                    }
                ]
            }
        }
    }
}

const getToken = (code) => {
    var unirest = require('unirest');
    var req = unirest('POST', 'https://notify-bot.line.me/oauth/token')
        .headers({
            'Content-Type': 'multipart/form-data; boundary=--------------------------981829256093153292111726'
        })
        .field('grant_type', 'authorization_code')
        .field('code', code)
        .field('redirect_uri', 'https://linebot-may.herokuapp.com/regisToken')
        .field('client_id', '3qZCtZ2rmMdUcDa3qhFfyM')
        .field('client_secret', 'GTFK3GaIa77WzB08gS9RH4446gpoZFRKd3YEineEJES')
        .end(function (res) {
            if (res.error) throw new Error(res.error);
            console.log(res.raw_body);
            console.log(res);
            let token = req.access_token;
            console.log(token+ '<--------------inside---');
            return token;
        });
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
                            "uri": "line://app/1653656986-Jq9lxgNw"
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
    test,
    getToken
}