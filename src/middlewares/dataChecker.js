import userInfos from "../models/appoitments";

class DataChecker{

    //check if the email exist
static async isEmailExist (req, res,next){
    const user= await userInfos.findOne({email:req.body.email});

    if(!user){
        return next();
    }
    return res.status(401).json({error:"email already exist"})
}
}

export default DataChecker;