import express from "express";
import Job from "../models/Job.js";

const router = express.Router();

// ✅ CREATE Job
router.post("/", async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(201).json({ message: "Job created", jobId: newJob.jobId });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

// ✅ GET All Jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

// ✅ UPDATE Job by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedJob) return res.status(404).json({ error: "Job not found" });
    res.json({ message: "Job updated", updatedJob });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to update job" });
  }
});

// ✅ DELETE Job by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    if (!deletedJob) return res.status(404).json({ error: "Job not found" });
    res.json({ message: "Job deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to delete job" });
  }
});

export default router;
