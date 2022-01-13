import express from "express";
import ScheduleController from "../controllers/scheduleController";
import verifyAccess from "../middlewares/verifyAccess";
import verifyToken from "../middlewares/verifyToken";
const scheduleRouter = express.Router();

scheduleRouter.get("/all", ScheduleController.getAllSchedule);
scheduleRouter.get(
  "/getone/:id",
  verifyToken,
  ScheduleController.getOneSchedule
);
scheduleRouter.delete(
  "/delete/:id",
  verifyToken,
  verifyAccess("leader"),
  ScheduleController.deleteSchedule
);
scheduleRouter.post(
  "/create/:id",
  verifyToken,
  verifyAccess("leader"),
  ScheduleController.createSchedule
);
scheduleRouter.patch(
  "/update/:id",
  verifyToken,
  verifyAccess("leader"),
  ScheduleController.updateSchedule
);

export default scheduleRouter;
