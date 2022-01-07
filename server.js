import express from "express";
import bodyParser from "body-Parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import appoitmentRouter from "./src/Routes/appoitmentRouter";
import userRoute from "./src/Routes/userRoutes"


dotenv.config("./.env")
const app = express();
app.use(bodyParser.json());
app.use("/user",userRoute)

app.use("/appoitment",appoitmentRouter);

app.use("/", (req,res)=> res.status(200).json({
    message:"This APi does no exist"
}));


 const dbUrl=process.env.DATABASEURL;
 mongoose.connect(dbUrl).then(()=> console.log("Database connected successfully"));

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server is running on port 3030`);
})

export default app;