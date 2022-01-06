import express from "express";
import userController from "../controllers/userController";

const userRoute= express.Router();
    
userRoute.post("/register", userController.createUser)
    
export default userRoute;