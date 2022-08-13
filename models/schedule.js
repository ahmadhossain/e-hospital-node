import mongoose from "mongoose";

const ScheduleSchema = new mongoose.Schema({
  FullName: String,
  StartTime: String,
  Specialist: String,
});

export default mongoose.model("Schedule", ScheduleSchema);
