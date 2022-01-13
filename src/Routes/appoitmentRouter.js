import express  from "express";
import appoitmentController from "../controllers/appoitmentController";

const appoitmentRouter= express.Router();

appoitmentRouter.post("/status",appoitmentController.createAppoitment);
appoitmentRouter.get("/getAll",appoitmentController.getAllAppoitments);
appoitmentRouter.get("/getOne/:id", appoitmentController.getOneAppoitment);
appoitmentRouter.delete("/deleteOne/:id", appoitmentController.deleteOneAppoitment);
appoitmentRouter.patch("/update/:id",appoitmentController.updateAppoitment);
appoitmentRouter.patch("update/status",appoitmentController.changeAppointmentStatus)


export default appoitmentRouter;

