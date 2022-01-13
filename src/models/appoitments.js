import mongoose from "mongoose";

const appoitmentSchema= new mongoose.Schema({
    
     user:{
         type:mongoose.Schema.ObjectId,
       ref:"user"
     },
     schedule:{
        type:mongoose.Schema.ObjectId,
        ref:"schedule"
      },
        services:{
          type:mongoose.Schema.ObjectId,
          ref:"sevices"
        },
   
    status:{
        type:String,
        enum:["pending","accepted","declined","canceled"],
        default:"pending"
    },

},{
    timestamp:true,
});

  appoitmentSchema.pre(/^find/ , function (next) {
    this.populate({
        path:"user",
         select:"firstName lastName idNumber phoneNumber gender adrress"
     })
     .populate({
       path:"schedule",
     })
     .populate({
       path:"services",
     })
    next();
});

const appoitment= mongoose.model("appoitment", appoitmentSchema);

export default appoitment;