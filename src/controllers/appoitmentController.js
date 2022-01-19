import appoitmentInfos from "../models/appoitments";
import ScheduleInfos from "../models/schedule";
import user from "../models/user";
import sendSms from "../helpers/sendSMS";

class appoitmentController {
  static async createAppoitment(req, res) {

    req.body.user = req.user._id;
    req.body.schedule = req.params.id;
    console.log(req.params.id)


    const Schedule = await ScheduleInfos.findById(req.params.id);
    if (!Schedule) {
      return res.status(404).json({ error: "Scheduler not exist!" })

    }
    console.log(Schedule)
    if (Schedule.availableSeats == 0) {
      return res.status(404).json({ error: "no seat ! please try later" })

    }

    const scheduleSeats = Schedule.availableSeats - 1;
    await ScheduleInfos.findByIdAndUpdate(req.params.id, { availableSeats: scheduleSeats }, { new: true });
    const appNber = Schedule.seats - scheduleSeats;
    req.body.appoitmentNumber = appNber;
    // console.log(req.body)
    const appoitment = await appoitmentInfos.create(req.body);
    // console.groupCollapsed(appoitment);
    if (!appoitment) {
      return res.status(404).json({ error: "appoitment not created! run out of seats!!" })
    }

    sendSms(req.user.firstName, req.user.lastName,appoitment.status, appoitment.appoitmentNumber,Schedule.startDate,  appoitment._id, req.user.phone_number)

    return res.status(200).json({ message: "Your appoitment created successfully!", data: Schedule });
  }



  //get all appoitments

  static async getAllAppoitments(req, res) {
    const appoitments = await appoitmentInfos.find();
    if (!appoitments) {
      return res.status(404).json({ error: "no appoitment registered" });
    }
    return res
      .status(200)
      .json({
        message: "appoitment registered successfully",
        data: appoitments,
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
      .json({ message: "appoitment updated", data: appoitment });
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

    return res.status(200).json({ message: "appoitment updated", data: appoitment });
  }



}

export default appoitmentController;
