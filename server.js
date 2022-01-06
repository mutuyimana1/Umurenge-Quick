import express from "express";
import bodyParser from "body-Parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import servicesRoutes from "./src/Routes/servicesRoutes";


dotenv.config("./.env")


const app = express();

app.use(bodyParser.json());
app.use("/services",servicesRoutes);
app.use("/",(req,res)=> res.status(200).json({




    message:"This is Service Api is not exist"
    }));
   

 const dbUrl=process.env.DATABASEURL;
 mongoose.connect(dbUrl).then(()=> console.log("Database connected successfully"));

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server is running on port 3030`);
})

export default app;


