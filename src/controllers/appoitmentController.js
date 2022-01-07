import appoitmentInfos from "../models/appoitments";

class appoitmentController{

    //create an appoitment

    static async createAppoitment(req,res){

        console.log(req.body)
        const appoitment= await appoitmentInfos.create(req.body);
        console.groupCollapsed(appoitment);

        if(!appoitment){
            return res.status(404).json({error:"appoitment not created! run out of seats!!"})
        }
        return res.status(200).json({message: "Your appoitment created successfully!" , data:appoitment});
    }

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
}

export default appoitmentController;