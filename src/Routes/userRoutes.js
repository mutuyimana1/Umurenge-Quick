import express from "express";
import userController from "../controllers/userController";
import verifyAccess from "../middlewares/verifyAccess";
const userRoute= express.Router();
    
userRoute.post("/register", userController.createUser)
userRoute.get("/all", userController.getAllUsers)
userRoute.get("/:id", userController.getOneUser)
userRoute.delete("/:id",userController.deleteOneUser)
userRoute.post("/login",
verifyAccess("admin"),

userController.login)
userRoute.patch("/:id", userController.updateOneUser)
    
export default userRoute;