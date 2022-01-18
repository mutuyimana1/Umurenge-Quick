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

},{
    timestamp:true,
});

  appoitmentSchema.pre(/^find/ , function (next) {
    this.populate({
        path:"user",
         select:"firstName lastName address Identification_card phone_number gender "
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