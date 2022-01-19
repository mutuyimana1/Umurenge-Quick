import dotenv from "dotenv";

dotenv.config();
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_ID,
  process.env.TWILIO_AUTH_ID
);

const sendSms = (
  firstName,
  lastName,
  serviceName,
  applicationStatus,
  startDate,
  endDate,
  appoitmentNumber,
  applicationId,
  userPhone
) => {
  client.messages
    .create({
      body:
        "Hey " +
        firstName +" "+
        lastName +
        " your appoitment for requesting " +
        serviceName +" "+
        " have been " +
        applicationStatus 
         + "on "+
        startDate+"up to"+
        endDate+"and your are number"+
        appoitmentNumber +
        " refId " +
        applicationId,
      from: "+15713646880",
      to: userPhone,
    })
    .then((message) => console.log(message.sid));
};

export default sendSms;
