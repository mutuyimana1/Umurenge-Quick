import dotenv from "dotenv";

dotenv.config();

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_ID
);
//Hey anne, your canopy booking accepted The application Id:233435

const sendSms = (
  userName,
  serviceName,
  applicationStatus,
  applicationId,
  userphone
) => {
  client.messages.create({
    body:
      "hey " +
      userName +
      ", your " +
      serviceName +
      " booking tour " +
      applicationStatus +
      " the application Id: " +
      applicationId,
      from:"+15713646880",
      to:userphone
  }).then((message)=>console.log(message.sid));
};

export default sendSms;
