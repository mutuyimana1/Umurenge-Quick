import mongoose from "mongoose";


const servicesSchema= new mongoose.Schema(
{
serviceName:{
    type:String,
    required:true,
},
servicesDescription:{
    type:String, 
    required:true,
}

});

const services =mongoose.model('Services',servicesSchema);

export default services;