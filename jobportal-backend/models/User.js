import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  otp: { type: String },
  otpExpiresAt: { type: Date },
});

// ✅ Model name: AdminUser, Collection name: admin
export default mongoose.model("User", userSchema, "admin");
