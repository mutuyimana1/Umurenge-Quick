import userInfos from "../models/user"
import bcrypt from "bcrypt"

class userController{
    //creating a user(admin or user)
    static async createUser(req,res){
        const hashPassword= bcrypt.hashSync(req.body.password,10)
        req.body.password= hashPassword
        const user= await userInfos.create(req.body)
        if (!user){
            return res.status (404).json({error:"this user was not registered"})
        }
        return res.status(200).json({message:"user created successfully", data:user})

    }
}

export default userController;