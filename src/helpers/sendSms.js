import dotenv from "dotenv";

dotenv.config();
const client=required("twilio")(
    process.env.TWILIO_ACCOUNT_ID,
    process.env.TWILIO_AUTH_ID
),

const sendSms=(firstName, lastName,serviseId, applicationStatus, applicationId, userPhone)=>{

client.message.create({body:

"Hey "+
firstName  +
lastName +
"your appoitment with " +
serviceId +
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