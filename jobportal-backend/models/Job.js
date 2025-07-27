import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  jobId: { type: String, unique: true },
  jobType:String,
  company: String,
  role: String,
  experience: String,
  requirements: String,
  apply: String,
  about: String,
  website: String,
  applylink: String,
  imagelink: String,
  location: String,
  startDate: String,
  endDate: String,
  about20Words: String,
}, { timestamps: true });

jobSchema.pre("save", async function (next) {
  if (!this.jobId) {
    const lastJob = await mongoose.model("Job").findOne().sort({ createdAt: -1 });
    const lastNumber = lastJob?.jobId ? parseInt(lastJob.jobId.replace("JOB", "")) : 999;
    this.jobId = `JOB${lastNumber + 1}`;
  }
  next();
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
