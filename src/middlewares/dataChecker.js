import UserInfos from "../models/user";


class DataChecker{
    static async isEmailExist(req,res,next){
        const user= await UserInfos.findOne({email:req.body.email})

        if(!user){
            return next();
        }
        return res.status(401).json({error:"email already exist"})
    }
    static async isIdentification_cardExist(req,res,next){
        const user= await UserInfos.findOne({Identification_card:req.body.isIdentification_card})

        if(!user){
            return next();
        }
        return res.status(401).json({error:"id already exist"})
    }
    static async isTelephoneExist(req,res,next){
        const user= await UserInfos.findOne({phone_Number:req.body.phone_Number})

        if(!user){
            return next();
        }
        return res.status(401).json({error:"Telephone already exist please try again"})
    }
}


export default DataChecker;