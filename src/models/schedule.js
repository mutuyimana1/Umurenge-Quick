import { time } from "console";
import mongoose from "mongoose";

const scheduleSchema= new mongoose.Schema(
    {
    user:{
        type: mongoose.Schema.ObjectId,

        ref:"User",
    },
    service:{
        type: mongoose.Schema.ObjectId,

        ref:"Services"
    },
    seats:Number,
    availableSeats:Number,
    startDate:Date,
    endDate:Date,
},
    {
        timestamps:true,
    }




);
scheduleSchema.pre(/^find/,function (next){

    this.populate({

      path:"user",

      select:"firstName lastName phone email "

    }).populate({

        path:"service",

    });

   

    next();

  });

const Schedule = mongoose.model("Schedule", scheduleSchema);

export default Schedule;