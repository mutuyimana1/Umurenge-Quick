import dotenv from "dotenv";

dotenv.config();
const client=require("twilio")(
    process.env.TWILIO_ACCOUNT_ID,
    process.env.TWILIO_AUTH_ID
);

const sendSms=(firstName, lastName,serviceName, applicationStatus, applicationId, userPhone)=>{

client.message.create({body:

"Hey "+
firstName  +
lastName +
"your appoitment with a leader on" +
serviceName +
"have been " +
applicationStatus +
"refId" +
applicationId,
from:"+14179245030",
to:userPhone
})
.then((message)=> console.log(message.sid));

};

export default sendSms;
