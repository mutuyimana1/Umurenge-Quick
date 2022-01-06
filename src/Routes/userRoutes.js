import express from "express";
import userController from "../controllers/userController";

const userRoute= express.Router();
    
userRoute.post("/register", userController.createUser)
userRoute.get("/all", userController.getAllUsers)
userRoute.get("/:id", userController.getOneUser)
userRoute.delete("/:id",userController.deleteOneUser)


    
export default userRoute;