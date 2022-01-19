import mongoose from "mongoose";

const appoitmentSchema= new mongoose.Schema({

    
    user:{
      type:mongoose.Schema.ObjectId,
    ref:"User"
     },
     schedule:{
        type:mongoose.Schema.ObjectId,
        ref:"Schedule"
      },
        services:{
          type:mongoose.Schema.ObjectId,
          ref:"Services"
        },
    status:{
        type:String,
        enum:["pending","accepted","declined","canceled"],
        default:"accepted"
    },
  appoitmentNumber:Number,
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
       select:"serviceName servicesDescription"
     })
    next();
});

const appoitment= mongoose.model("appoitment", appoitmentSchema);

export default appoitment;