import mongoose from "mongoose"
import { stringify } from "querystring"

const userSchema= new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        default: "Rwanda",
    },
    Identification_card:{
        type:Number,
        unique:true,
        required:true,
    },
    phone_number:{
        type:String,
        unique:true,
        required:true
    },
    gender:{
        type:String,
        enum:["male","female","other","custom"]
    },
    role:{
        type:String,
        default:"leader",
        enum:["leader","admin","user"]
    }

},
{
    timestamps:true,
})

const user=mongoose.model('User', userSchema)

export default user;