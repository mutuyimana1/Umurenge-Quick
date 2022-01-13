import express from "express";
import ScheduleController from "../controllers/scheduleController";
import verifyToken from "../middlewares/verifyToken";
const scheduleRouter = express.Router();

scheduleRouter.post("/create", verifyToken, ScheduleController.createSchedule);
scheduleRouter.get("/all",ScheduleController.getAllSchedule);
scheduleRouter.get(
  "/getone/:id",
  ScheduleController.getOneSchedule
);
scheduleRouter.delete(
  "/delete/:id",
  verifyToken,
  ScheduleController.deleteSchedule
);
scheduleRouter.patch(
  "/update/:id",
  verifyToken,
  ScheduleController.updateSchedule
);

export default scheduleRouter;
