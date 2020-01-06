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

const authorize = () => {
    let req = unirest('POST', configNotify.authorizeApi)
        .headers({
            'Content-Type': 'multipart/form-data; boundary=--------------------------408739580452535410043793'
        })
        .field('response_type', 'code')
        .field('client_id', configNotify.clientId)
        .field('redirect_uri', configNotify.redirect_uri)
        .field('scope', 'notify')
        .field('state', 'NO_STATE')
        .end(function (res) {
            if (res.error) throw new Error(res.error);
            console.log(res.raw_body);
        });
}

module.exports = {
    notify,
    authorize
}