const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST /api/users/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful" });
});

module.exports = router;
