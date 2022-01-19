import userInfos from "../models/user";
import bcrypt from "bcrypt";
import user from "../models/user";
import TokenAuth from "../helpers/tokeAuth";


class userController {
  //creating a user(admin or user)
  static async createUser(req, res) {
    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashPassword;
    const user = await userInfos.create(req.body);
    if (!user) {
      return res.status(404).json({ error: "this user was not registered" });
    }
    return res
      .status(200)
      .json({ message: "user created successfully", data: user });
  }
  //getting all registered users
  static async getAllUsers(req, res) {
    const user = await userInfos.find();
    if (!user) {
      return res.status(404).json({ error: "no users available" });
    }
    return res
      .status(200)
      .json({ message: "users successfully retrieved", data: user });
  }
  //getting one user
  static async getOneUser(req, res) {
    const user = await userInfos.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "user not retrieved, check ID" });
    }
    return res
      .status(200)
      .json({ message: "User retrieved successfully", data: user });
  }
  //deleting a user
  static async deleteOneUser(req, res) {
    const user = await userInfos.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "user not deleted" });
    }
    return res
      .status(200)
      .json({ message: "User deleted successfully",});
  }
  //updating a user
  static async updateOneUser(req, res) {
    const user = await userInfos.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ error: "user not updated" });
    }
    return res.status(200).json({ message: "user updated successfully" });
  }
    //login
    static async login(req, res) {
        const user = await userInfos.findOne({ email: req.body.email });
        if (!user) {
          return res
            .status(404)
            .json({ error: "user not found! kindly first register" });
        }
        if (bcrypt.compareSync(req.body.password, user.password)) {
          user.password = null;
          const token = TokenAuth.tokenGenerator({user:user});
    
          return res
            .status(200)
            .json({
              message: "User logged in successfully",
              token:token,
              data:user
            });
        }
        return res.status(400).json({ error: "invalid password" });
      }
    


}
export default userController;
