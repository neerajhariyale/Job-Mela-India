import express from "express";
import User from "../models/User.js";
import otpGenerator from "otp-generator";
import nodemailer from "nodemailer";
const router = express.Router();

// 🔐 LOGIN & OTP SEND
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      email: email.trim().toLowerCase(),
      password: password.trim()
    });

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
    const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

    user.otp = otp;
    user.otpExpiresAt = otpExpiresAt;
    await user.save();

    // ✅ Send OTP via email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS
      }
    });

    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: user.email,
      subject: "Your OTP Code",
      text: `Your OTP code is: ${otp}`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "OTP sent to email" });
  } catch (err) {
    console.error("Login Error:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// 🔐 VERIFY OTP
router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email: email.trim().toLowerCase() });

    if (!user || !user.otp || user.otp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid or expired OTP" });
    }

    if (user.otpExpiresAt < new Date()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    user.otp = null;
    user.otpExpiresAt = null;
    await user.save();

    res.status(200).json({ success: true, message: "Login successful" });
  } catch (err) {
    console.error("OTP Verify Error:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
