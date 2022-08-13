import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  FullName: String,
  Email: String,
  Password: String,
  Role: String,
});

export default mongoose.model("Admin", AdminSchema);
