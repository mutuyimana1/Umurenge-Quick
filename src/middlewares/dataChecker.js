import UserInfos from "../models/user";

class DataChecker {

   // check if the email exist
    static async isEmailExist(req, res, next) {
        const user = await UserInfos.findOne({ email: req.body.email });

        console.log(user)
        if (!user) {
            return next();
        }
        return res.status(401).json({ error: "email already exist" })
    }



    
}

export default DataChecker;