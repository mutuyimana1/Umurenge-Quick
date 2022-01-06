import mongoose from "mongoose";

const scheduleSchema= new mongoose.Schema(
    {
        user{
            type:mongoose.Schema.subjectId
            
            ref:'User'
        }




})