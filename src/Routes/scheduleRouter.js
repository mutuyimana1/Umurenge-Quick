import express from "express";
import ScheduleController from "../controllers/scheduleController";
import verifyAccess from "../middlewares/verifyAccess";
import verifyToken from "../middlewares/verifyToken";
const scheduleRouter = express.Router();
scheduleRouter.post("/create", verifyToken, ScheduleController.createSchedule);
scheduleRouter.post("/create/:id", verifyToken, 

ScheduleController.createSchedule);
scheduleRouter.get("/all", verifyToken, ScheduleController.getAllSchedule);
scheduleRouter.get(
  "/getone/:id",
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
