import express from "express";
import userController from "../controllers/userController";
import validator from "../middlewares/validator";


import verifyAccess from "../middlewares/verifyAccess";

const userRoute= express.Router();
    
userRoute.post("/register",
validator.newAccountRules(), userController.createUser)
userRoute.get("/all", userController.getAllUsers)
userRoute.get("/:id", userController.getOneUser)
userRoute.delete("/:id",userController.deleteOneUser)
userRoute.post("/login",userController.login)
userRoute.patch("/:id", userController.updateOneUser)
    
export default userRoute;