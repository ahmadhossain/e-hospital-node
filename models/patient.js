import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  FullName: String,
  Email: String,
  Age: String,
  BloodGroup: String,
  Password: String,
  Role: String,
});

export default mongoose.model("Patient", PatientSchema);
