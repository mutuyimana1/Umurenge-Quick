import express from "express";
import userController from "../controllers/userController";
import validator from "../middlewares/validator";
import DataChecker from "../middlewares/dataChecker";
import verifyToken from "../middlewares/verifyToken"
import verifyAccess from "../middlewares/verifyAccess";

const userRoute = express.Router();

userRoute.post(
  "/register",
  validator.newAccountRules(),
  validator.validateInput,
  DataChecker.isEmailExist,
  userController.createUser
);
userRoute.get("/all", userController.getAllUsers);
userRoute.get("/:id",verifyToken, verifyAccess("admin"), userController.getOneUser);
userRoute.delete("/delete/:id",verifyToken, verifyAccess("admin"), userController.deleteOneUser);
userRoute.post("/login", userController.login);
userRoute.patch("/update/:id",verifyToken,verifyAccess, userController.updateOneUser);

export default userRoute;


