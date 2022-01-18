import express from "express";
import ServicesController from "../controllers/servicesController";
import verifyToken from "../middlewares/verifyToken";
import verifyAccess from "../middlewares/verifyAccess";
const servicesRouter=express.Router();

servicesRouter.post("/create", verifyToken, verifyAccess("leader"),
ServicesController.createService);
servicesRouter.get("/getAll", ServicesController.getAllServices);
servicesRouter.get("/:id",ServicesController.getOneService);
servicesRouter.delete("/:id",verifyToken, verifyAccess("leader"),ServicesController.deleteOneService);
servicesRouter.patch("/:id",verifyToken, verifyAccess("leader"),ServicesController.updateOneService);


export default servicesRouter;