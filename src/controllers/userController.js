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
    //getting all registered users
    static async getAllUsers(req,res){
        const user = await userInfos.find();
        if (!user){
            return res.status(404).json({error:"no users available"})
        }
        return res.status(200).json({message:"users successfully retrieved", data:user})

    }
    //getting one user
    static async getOneUser(req,res){
        const user = await userInfos.findById(req.params.id)
        if (!user){
            return res.status(404).json({ error: "user not retrieved, check ID" })
        }
        return res.status(200).json({ message: "User retrieved successfully", data: user });
    }
    //deleting a user
    static async deleteOneUser(req,res){
        const user = await userInfos.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).json({ error: "user not deleted" })
        }
        return res.status(200).json({ message: "User deleted successfully", data: user });

    }

    // static async deleteOneUser(req, res) {
    //     const user = await UserInfos.findByIdAndDelete(req.params.id);
    //     if (!user) {
    //         return res.status(404).json({ error: "user not deleted" })
    //     }
    //     return res.status(200).json({ message: "User deleted successfully", data: user });
    // }
   
}

export default userController;