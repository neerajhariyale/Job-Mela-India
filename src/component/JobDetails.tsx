import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

type Job = {
  _id: string;
  imagelink: string;
  role: string;
  about: string;
  companyName: string;
  jobType: string;
  education: string;
  salary: string;
  location: string;
  startDate: string;
  endDate: string;
  bond?: string;
  skills?: string;
  qualification?: string;
  applylink?: string;
  website?: string;
};

export default function JobDetails() {
  const { jobId } = useParams<{ jobId: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs") // fetch all jobs
      .then((res) => {
        const jobs = res.data;
        const foundJob = jobs.find((j: { _id: string | undefined; }) => j._id === jobId); // match ID

        if (foundJob) {
          setJob(foundJob);
          setError(null);
        } else {
          setJob(null);
          setError("❌ Job not found");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch jobs");
      });
  }, [jobId]);


  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!job) return <p className="text-center mt-10">Loading job details...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Company Image */}
      <img
        src={job.imagelink}
        alt={job.companyName}
        className="rounded-2xl shadow-lg mb-6 w-full h-60 object-cover"
      />

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4">{job.role}</h1>

      {/* Company Details */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Company Details</h2>
         <div dangerouslySetInnerHTML={{ __html: job.about }} />
      </div>

      {/* Requirements */}
      <div className="space-y-1 mb-6">
        <h2 className="text-xl underline font-semibold mb-4">Requirements</h2>
        <p><strong>Education:</strong> {job.education}</p>
        <p><strong>Job Profile:</strong> {job.role}</p>
        <p><strong>Salary/Stipend:</strong> {job.salary}</p>
        <p><strong>Bond:</strong> {job.bond || "No Bond"}</p>
        <p><strong>Skills Required:</strong> {job.skills}</p>
        <p><strong>Qualification Required:</strong> {job.qualification}</p>
        <p><strong>Start Date:</strong> {job.startDate}</p>
        <p><strong>End Date:</strong> {job.endDate}</p>
        <p><strong>Location:</strong> {job.location}</p>
      </div>

      {/* Table Section */}
      <h2 className="text-xl font-semibold mb-2">Important Links</h2>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-6">
        <tbody>
          <tr>
            <td className="border px-4 py-2">Apply Link</td>
            <td className="border px-4 py-2">
              {job.applylink ? (
                <a href={job.applylink} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  Apply Here
                </a>
              ) : "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Company Website</td>
            <td className="border px-4 py-2">
              {job.website ? (
                <a href={job.website} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  Visit Website
                </a>
              ) : "N/A"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
