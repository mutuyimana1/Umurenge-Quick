import appoitmentInfos from "../models/appoitments";
import ScheduleInfos from "../models/schedule";
import user from "../models/user";
import sendSms from "../helpers/sendSms";
import appoitment from "../models/appoitments";

class appoitmentController {
  //create appointment

  static async createAppoitment(req,res){
    req.body.user =req.user._id;
    req.body.schedule =req.params.id;

    const schedule= await ScheduleInfos.findById(req.params.id);

    if(!schedule){
      return res.status(404).json({ error: "Scheduler not exist!" })
    }
    if (schedule.availableSeats == 0) {
      return res.status(404).json({ error: "no seat ! please try later" })
    }
    const scheduleSeats = schedule.availableSeats - 1;
    await ScheduleInfos.findByIdAndUpdate(req.params.id, { availableSeats: scheduleSeats }, { new: true });
    const appNber = schedule.seats - scheduleSeats;
    req.body.appoitmentNumber = appNber;

  
    const appointment= await appoitmentInfos.create(req.body)
  // console.log(appointment);
    if(!appointment){
      return res.status(404).json({error:"appointment not created"})
    }
    const appointmentdata= await appoitmentInfos.findById(appointment._id);
    // console.log(appointmentdata) ;
    sendSms(req.user.firstName,req.user.lastName,appointmentdata.schedule.service.serviceName,appointment.status,schedule.startDate,
      schedule.endDate, appointment.appoitmentNumber, appointment._id,appointmentdata.user.phone_number)
   
    return res.status(200).json({message:"appointment created successfully", data:appointment})
   }
   

  //get all appoitments

  static async getAllAppoitments(req, res) {
    const appointment = await appoitmentInfos.find();
    if (!appointment) {
      return res.status(404).json({ error: "no appoitment registered" });
    }
    return res
      .status(200)
      .json({
        message: "appoitment registered successfully",
        data:appointment,
      });
  }

  // get one appoitment

  static async getOneAppoitment(req, res) {
    const appoitment = await appoitmentInfos.findById(req.params.id);


    if (!appoitment) {
      return res.status(404).json({ error: "appoitment not found" });
    }
    return res
      .status(200)
      .json({ message: "appoitment found successfully", data: appoitment });
  }

  //delete one appoitment
  static async deleteOneAppoitment(req, res) {
    const appoitment = await appoitmentInfos.findByIdAndDelete(req.params.id);
    if (!appoitment) {
      return res.status(404).json({ error: "appoitment not deleted" });
    }
    return res
      .status(200)
      .json({ message: "appoitment deleted", data: appoitment });
  }

  //update a appointment
  static async updateAppoitment(req, res) {
    const appointment = await appoitmentInfos.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!appoitment) {
      return res.status(404).json({ error: "appoitment not updated" });
    }
    return res
      .status(200)
      .json({ message: "appoitment updated", data: appointment });
  }
  //change appointment status
  
  static async changeAppointmentStatus(req, res) {
    const { id, status } = req.body;
    const appointment = await appoitmentInfos.findByIdAndUpdate(
      id,
      { status: status },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({ error: "failed to upadate status" });
    }

    return res.status(200).json({message:"appoitment updated", data:appointment});
}

//create appoitment and send sms


// static async createAppoitment(req,res){
//     const{id,status}=req.body;
//     console.log("gggg",req.params.id)
//     const appoitment=await appoitmentInfos.findByIdAndUpdate(id,{status:status},{new:true})
//     if(!appoitment) {
//         return res.status(404).json({error:"failed to update status"});

//     }
//     console.log(appoitment);
//     sendSms(appoitment.user.firstName,appoitment.user.lastName,appoitment.services.serviceName,appoitment.status,appoitment._id,appoitment.user.phone)
//     return res.status(200).json({message:"success",data:appoitment})
// }

    // const Schedule= await ScheduleInfos.findById(req.body.id);
    // console.log(Schedule)
    // const scheduleSeats= Schedule.seats-1;
    // await ScheduleInfos.findByIdAndUpdate(req.params.id,{seats:scheduleSeats},{new:true});


}

export default appoitmentController;
