import Schedule from "../models/schedule";
import ScheduleInfos from "../models/schedule";
import TokenAuth from "../helpers/tokeAuth";

class ScheduleController{
   static async createSchedule(req,res){
    const schedule = await ScheduleInfos.create(req.body);

    if(!schedule){
        return res.status(400).json({ error: "schedule not registered" });
    }
    return res
      .status(200)
      .json({ message: "schedule registered successfully", data: schedule });
    };
    static async getAllSchedule(req,res){
        const schedules = await ScheduleInfos.find(req.body);
        if(!schedules){
            return res.status(400).json({error:"schedule not found"});
        }
        return res.status(200).json({message:"schedules are found", data:schedules});
    };
    static async getOneSchedule(req,res){
        const schedule = await ScheduleInfos.findById(req.params.id);
        if (!Schedule){
            return res.status(400).json({error:"schedule not found"});
        }
        return res.status(200).json({message:"schedule is found", data:schedule});
    };
    static async deleteSchedule(req,res){
        const schedule = await ScheduleInfos.findByIdAndDelete(req.params.id);
        if(!Schedule){
            return res.status(400).json({error:"schedule not deleted"});
        }
        return res.status(400).json({message:"schedule deleted successfully"});
    };
    static async updateSchedule(req,res){
        const schedule= await ScheduleInfos.findByIdAndUpdate(req.params.id, req.body,{new: true});
        if(!schedule){
            return res.status(400).json({error:"schedule not updated"});

        }

        // const updatedschedule= await ScheduleInfos.findById(req.params.id);
        return res.status(200).json({message:"schedule updated successfully",data:schedule});
    }
   } 

   export default ScheduleController;