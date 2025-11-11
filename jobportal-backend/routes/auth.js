import express from "express";
import User from "../models/User.js";
import otpGenerator from "otp-generator";
import nodemailer from "nodemailer";
const router = express.Router();

// 🔐 LOGIN & OTP SEND
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  // ✅ Validate input data
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
      error: "MISSING_CREDENTIALS",
      statusCode: 400
    });
  }

  // ✅ Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format",
      error: "INVALID_EMAIL_FORMAT",
      statusCode: 400
    });
  }

  try {
    const user = await User.findOne({
      email: email.trim().toLowerCase(),
      password: password.trim()
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
        error: "INVALID_CREDENTIALS",
        statusCode: 401
      });
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

    res.status(200).json({
      success: true,
      message: "OTP sent to email successfully",
      statusCode: 200
    });
  } catch (err) {
    console.error("Login Error:", err.message);
    
    // ✅ Handle specific error types
    if (err.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: "Validation error occurred",
        error: "VALIDATION_ERROR",
        statusCode: 400,
        details: err.message
        
      });
    }
    
    if (err.name === 'MongoError' || err.name === 'MongoServerError') {
      return res.status(500).json({
        success: false,
        message: "Database connection error",
        error: "DATABASE_ERROR",
        statusCode: 500
      });
    }

    // ✅ Handle email sending errors
    if (err.code === 'EAUTH' || err.code === 'ECONNECTION') {
      return res.status(500).json({
        success: false,
        message: "Failed to send OTP email",
        error: "EMAIL_SEND_FAILED",
        statusCode: 500
      });
    }

    // ✅ Generic server error
    res.status(500).json({
      success: false,
      message: "Internal server error occurred",
      error: "INTERNAL_SERVER_ERROR",
      statusCode: 500
    });
  }
});

// 🔐 VERIFY OTP
router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;
  
  // ✅ Validate input data
  if (!email || !otp) {
    return res.status(400).json({
      success: false,
      message: "Email and OTP are required",
      error: "MISSING_OTP_DATA",
      statusCode: 400
    });
  }

  // ✅ Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format",
      error: "INVALID_EMAIL_FORMAT",
      statusCode: 400
    });
  }

  // ✅ Validate OTP format (6 digits)
  if (!/^\d{6}$/.test(otp.trim())) {
    return res.status(400).json({
      success: false,
      message: "OTP must be 6 digits",
      error: "INVALID_OTP_FORMAT",
      statusCode: 400
    });
  }

  try {
    const user = await User.findOne({ email: email.trim().toLowerCase() });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        error: "USER_NOT_FOUND",
        statusCode: 404
      });
    }

    if (!user.otp) {
      return res.status(400).json({
        success: false,
        message: "No OTP found for this user",
        error: "NO_OTP_FOUND",
        statusCode: 400
      });
    }

    if (user.otpExpiresAt < new Date()) {
      return res.status(400).json({
        success: false,
        message: "OTP has expired",
        error: "OTP_EXPIRED",
        statusCode: 400
      });
    }

    if (user.otp !== otp.trim()) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
        error: "INVALID_OTP",
        statusCode: 400
      });
    }

    user.otp = null;
    user.otpExpiresAt = null;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Login successful",
      statusCode: 200
    });
  } catch (err) {
    console.error("OTP Verify Error:", err.message);
    
    // ✅ Handle specific error types
    if (err.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: "Validation error occurred",
        error: "VALIDATION_ERROR",
        statusCode: 400,
        details: err.message
      });
    }
    
    if (err.name === 'MongoError' || err.name === 'MongoServerError') {
      return res.status(500).json({
        success: false,
        message: "Database connection error",
        error: "DATABASE_ERROR",
        statusCode: 500
      });
    }

    // ✅ Generic server error
    res.status(500).json({
      success: false,
      message: "Internal server error occurred",
      error: "INTERNAL_SERVER_ERROR",
      statusCode: 500
    });
  }
});

export default router;
