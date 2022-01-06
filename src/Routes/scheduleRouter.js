import express from "express";
import ScheduleController from "../controllers/scheduleController";

const scheduleRouter = express.Router();

scheduleRouter.post(
    "/create", ScheduleController.createSchedule)
    scheduleRouter.get("/all", ScheduleController.getAllSchedule)
    scheduleRouter.get("/:id", ScheduleController.getOneSchedule)
    scheduleRouter.delete("/:id", ScheduleController.deleteSchedule)
    scheduleRouter.patch("/:id", ScheduleController.updateSchedule)


    export default scheduleRouter;