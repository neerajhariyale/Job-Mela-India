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

//find by id
router.get("/api/jobs", async (req, res) => {
  try {
    const { jobId } = req.query;
    console.log("Query Params:", req.query);

    if (!jobId) {
      return res.status(400).json({ error: "jobId is required" });
    }

    // validate id
    if (!mongoose.Types.ObjectId.isValid(jobId.trim())) {
      return res.status(400).json({ error: "Invalid jobId format", jobId });
    }

    // find job
    const job = await Job.findById(jobId.trim());
    if (!job) {
      return res.status(404).json({ error: "Job not found", jobId });
    }

    // ✅ single job only
    return res.json(job);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});





// ✅ GET Job Statistics Summary
router.get("/stats", async (req, res) => {
  try {
    const jobs = await Job.find();
    
    const stats = jobs.reduce((acc, job) => {
      acc.total++;
      
      const jobType = job.jobType?.toLowerCase() || '';
      
      if (jobType.includes('internship')) {
        acc.internship++;
      } else if (jobType.includes('itjobs') || jobType.includes('technology')) {
        acc.it++;
      } else if (jobType.includes('nonitjobs') || jobType.includes('nonit')) {
        acc.nonit++;
      } else if (jobType.includes('govtjobs') || jobType.includes('govt')) {
        acc.govt++;
      }
      
      return acc;
    }, {
      total: 0,
      internship: 0,
      it: 0,
      nonit: 0,
      govt: 0
    });

    res.status(200).json(stats);
  } catch (err) {
    console.error("Job stats error:", err);
    res.status(500).json({ error: "Failed to fetch job statistics" });
  }
});

// ✅ GET Chart Statistics
router.get("/chart-stats", async (req, res) => {
  try {
    const { timeRange = "7d" } = req.query;
    
    // Calculate date range based on timeRange
    const now = new Date();
    let startDate = new Date();
    
    switch (timeRange) {
      case "7d":
        startDate.setDate(now.getDate() - 7);
        break;
      case "30d":
        startDate.setDate(now.getDate() - 30);
        break;
      case "90d":
        startDate.setDate(now.getDate() - 90);
        break;
      case "6mon":
        startDate.setMonth(now.getMonth() - 6);
        break;
      case "9mon":
        startDate.setMonth(now.getMonth() - 9);
        break;
      case "12mon":
        startDate.setFullYear(now.getFullYear() - 1);
        break;
      case "2year":
        startDate.setFullYear(now.getFullYear() - 2);
        break;
      case "3year":
        startDate.setFullYear(now.getFullYear() - 3);
        break;
      case "4year":
        startDate.setFullYear(now.getFullYear() - 4);
        break;
      case "5year":
        startDate.setFullYear(now.getFullYear() - 5);
        break;
      default:
        startDate.setDate(now.getDate() - 7);
    }

    // Aggregate jobs by date and job type
    const stats = await Job.aggregate([
      {
        $match: {
          createdAt: { $gte: startDate, $lte: now }
        }
      },
      {
        $group: {
          _id: {
            date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
            jobType: "$jobType"
          },
          count: { $sum: 1 }
        }
      },
      {
        $group: {
          _id: "$_id.date",
          jobTypes: {
            $push: {
              jobType: "$_id.jobType",
              count: "$count"
            }
          }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]);

    // Transform data to match chart format
    const chartData = stats.map(day => {
      const dataPoint = { date: day._id };
      
      // Initialize all job types with 0
      dataPoint.internship = 0;
      dataPoint.it = 0;
      dataPoint.nonit = 0;
      dataPoint.govt = 0;
      
      // Fill in actual counts
      day.jobTypes.forEach(jobType => {
        switch (jobType.jobType?.toLowerCase()) {
          case "internship":
            dataPoint.internship = jobType.count;
            break;
          case "itjobs":
          case "it":
            dataPoint.it = jobType.count;
            break;
          case "nonitjobs":
          case "nonit":
            dataPoint.nonit = jobType.count;
            break;
          case "govtjobs":
          case "govt":
            dataPoint.govt = jobType.count;
            break;
        }
      });
      
      return dataPoint;
    });

    res.status(200).json(chartData);
  } catch (err) {
    console.error("Chart stats error:", err);
    res.status(500).json({ error: "Failed to fetch chart statistics" });
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
