import express from "express";
import ScheduleController from "../controllers/scheduleController";

const scheduleRouter = express.Router();

scheduleRouter.post(
    "/create", ScheduleController.createSchedule)
    scheduleRouter.get("/all", ScheduleController.getAllSchedule)
    scheduleRouter.get("/getone/:id", ScheduleController.getOneSchedule)
    scheduleRouter.delete("/delete/:id", ScheduleController.deleteSchedule)
    scheduleRouter.patch("/update/:id", ScheduleController.updateSchedule)


    export default scheduleRouter;