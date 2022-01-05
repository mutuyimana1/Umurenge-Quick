import express from "express";
import bodyParser from "body-Parser";
import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config("./.env")


const app = express();

app.use(bodyParser.json());


 const dbUrl=process.env.DATABASEURL;
 mongoose.connect(dbUrl).then(()=> console.log("Database connected successfully"));

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server is running on port 3030`);
})

export default app;