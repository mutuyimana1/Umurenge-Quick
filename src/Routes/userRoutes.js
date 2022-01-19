import express from "express";
import userController from "../controllers/userController";
import validator from "../middlewares/validator";
import DataChecker from "../middlewares/dataChecker";

import verifyAccess from "../middlewares/verifyAccess";


const userRoute = express.Router();

userRoute.post(
  "/register",
  validator.newAccountRules(),
  validator.validateInput,
  DataChecker.isEmailExist,
  userController.createUser
);
userRoute.get("/all", verifyAccess("admin"), userController.getAllUsers);
userRoute.get("/:id", verifyAccess("admin"), userController.getOneUser);
userRoute.delete("/:id", verifyAccess("admin"), userController.deleteOneUser);
userRoute.post("/login", userController.login);
userRoute.patch("/:id", userController.updateOneUser);

export default userRoute;



