import dotenv from "dotenv";

dotenv.config();
const client = require("twilio")(
    process.env.TWILIO_ACCOUNT_ID,
    process.env.TWILIO_AUTH_ID
);

const sendSms = (firstName, lastName,applicationStatus,appoitmentNumber, startDate,  applicationId, userPhone) => {

    client.messages.create({
        body:

            "Hey " +
            firstName  +
            " " +
             lastName +
            " your appoitment with " +
            " a sector leader " +
            " have been " +
            applicationStatus +
            " with number " +
             appoitmentNumber +
             " on " +
             startDate +
            " refId " +
            applicationId,
        from: "+14179245030",
        to: userPhone
    })
        .then((message) => console.log(message.sid));

};

export default sendSms;
