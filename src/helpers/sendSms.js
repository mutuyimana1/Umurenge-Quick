import dotenv from "dotenv";

dotenv.config();
const client=require("twilio")(
    process.env.TWILIO_ACCOUNT_ID,
    process.env.TWILIO_AUTH_ID
);

const sendSms=(firstName, lastName,serviceName, applicationStatus, applicationId, userPhone)=>{

client.messages.create({body:

"Hey "+
firstName  +
lastName +
" your appoitment with of " +
serviceName +
" have been " +
applicationStatus +
" refId " +
applicationId,
from:"+15713646880",
to:userPhone
})
.then((message)=> console.log(message.sid));

};

export default sendSms;
