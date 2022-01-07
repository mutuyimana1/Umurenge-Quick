import express  from "express";
import appoitmentController from "../controllers/appoitmentController";

const appoitmentRouter= express.Router();

appoitmentRouter.post("/status",appoitmentController.createAppoitment);
appoitmentRouter.get("/getAll",appoitmentController.getAllAppoitments);
appoitmentRouter.get("/:id", appoitmentController.getOneAppoitment);
appoitmentRouter.delete("/:id", appoitmentController.deleteOneAppoitment);


export default appoitmentRouter;

