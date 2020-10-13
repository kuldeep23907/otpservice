// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC9d9426c8601e0025e2d46bad36816ada';
const authToken = '3f21e76a763fa391d701c869b371c81f';
const client = require('twilio')(accountSid, authToken);

const sendAMessage = (data, callback) => {
    console.log(data, "input data");
    client.messages
    .create({
       body: "The amount " + data.amount + " is going to be " + data.action + "  from the address " + data.member + " Please provide this OTP to proceed " + data.otp,
       from: '+12055962414',
       to: data.to
     })
    .then(message => {
        console.log(message.sid);
        callback(200, {msid:true});
    });
}

module.exports.sendAMessage = sendAMessage
