import appoitmentInfos from "../models/appoitments";
import ScheduleInfos from "../models/schedule";
import user from "../models/user";
import sendSms from "../helpers/sendSMS";

class appoitmentController{

   
    //get all appoitments

    static async getAllAppoitments(req,res){
        const appoitments= await appoitmentInfos.find();
         if(!appoitments){
             return res.status(404).json({error:"no appoitment registered"})
         }
         return res.status(200).json({message:"appoitment registered successfully", data:appoitments});
    }

    // get one appoitment

    static async getOneAppoitment(req,res){
        const appoitment = await appoitmentInfos.findById(req.params.id);
    
        if(!appoitment){
            return res.status(404).json({error:"appoitment not found"});
        }
        return res.status(200).json({message:"appoitment found successfully", data: appoitment});
    }
    
    //delete one appoitment
    static async deleteOneAppoitment(req,res){
        const appoitment= await appoitmentInfos.findByIdAndDelete(req.params.id);
        if(!appoitment){
            return res.status(404).json({error:"appoitment not deleted"});
        }
        return res.status(200).json({message:"appoitment deleted", data: appoitment});
}

//update a schedule
static async updateAppoitment(req,res){
    const appoitment= await appoitmentInfos.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!appoitment){
        return res.status(404).json({error:"appoitment not updated"});
    }
    return res.status(200).json({message:"appoitment updated", data:appoitment});
}

//create appoitment and send sms


static async createAppoitment(req,res){
    const{id,status}=req.body;
    console.log("gggg",req.params.id)
    const appoitment=await appoitmentInfos.findByIdAndUpdate(id,{status:status},{new:true})
    if(!appoitment) {
        return res.status(404).json({error:"failed to update status"});

    }
    console.log(appoitment);
    sendSms(appoitment.user.firstName,appoitment.user.lastName,appoitment.services.serviceName,appoitment.status,appoitment._id,appoitment.user.phone)
    return res.status(200).json({message:"success",data:appoitment})
}
 //create an appoitment

      
 static async createAppoitment(req,res){
    const appoitmentData={
        user:req.user._id,
        appoitment:req.params.id
    };
    
    // console.log(req.body)
    const appoitment= await appoitmentInfos.create(req.body);
    // console.groupCollapsed(appoitment);

    if(!appoitment){
        return res.status(404).json({error:"appoitment not created! run out of seats!!"})
    }
    
    const Schedule= await ScheduleInfos.findById(req.body.id);
    console.log(Schedule)
    const scheduleSeats= Schedule.seats-1;
    await ScheduleInfos.findByIdAndUpdate(req.params.id,{seats:scheduleSeats},{new:true});

    return res.status(200).json({message: "Your appoitment created successfully!" ,data:Schedule});
}


}

export default appoitmentController;