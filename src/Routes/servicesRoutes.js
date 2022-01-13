import express from "express";
import ServicesController from "../controllers/servicesController";

const servicesRouter=express.Router();

servicesRouter.post("/create",
ServicesController.createService);
servicesRouter.get("/getAll", ServicesController.getAllServices);
servicesRouter.get("/:id",ServicesController.getOneService);
servicesRouter.delete("/:id",ServicesController.deleteOneService);
servicesRouter.patch("/:id",ServicesController.updateOneService);


export default servicesRouter;