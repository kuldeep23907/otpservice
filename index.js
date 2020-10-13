// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendAMessage = (data, callback) => {
    console.log(data, "input data");
    client.messages
    .create({
       body: "The amount  " + data.amount + " is going to be " + data.action + "  from the address " + data.member + " Please provide this OTP to proceed " + data.otp,
       from: process.env.MY_NUMBER,
       to: data.to
     })
    .then(message => {
        console.log(message.sid);
        callback(200, {msid:true});
    });
}

module.exports.sendAMessage = sendAMessage
