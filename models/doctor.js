import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  FullName: String,
  Email: String,
  Age: String,
  Education: String,
  Result: String,
  Password: String,
  Role: String,
  Verify: String,
});

export default mongoose.model("Doctor", DoctorSchema);
