import express from "express";
import appoitmentController from "../controllers/appoitmentController";
import verifyToken from "../middlewares/verifyToken";
import verifyAcess from "../middlewares/verifyAccess";

const appoitmentRouter = express.Router();

appoitmentRouter.post("/create/:id", verifyToken, verifyAcess("user"), appoitmentController.createAppoitment);
appoitmentRouter.get("/getAll", appoitmentController.getAllAppoitments);
appoitmentRouter.get("/getOne/:id", appoitmentController.getOneAppoitment);
appoitmentRouter.delete("/deleteOne/:id", appoitmentController.deleteOneAppoitment);
appoitmentRouter.patch("/update/:id", verifyToken, verifyAcess("leader"), appoitmentController.updateAppoitment);


export default appoitmentRouter;

