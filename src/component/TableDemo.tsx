import {
  Table, TableBody, TableCaption, TableCell,
  TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiEndpoints } from "@/lib/api";

const jobTypeMap: { [key: string]: string } = {
  itjobs: "IT Jobs",
  nonitjobs: "Non IT Jobs",
  govtjobs: "Govt. Jobs",
  internship: "Internship",
};

type Job = {
  _id: string;
  jobId: string;
  startDate: string;
  endDate: string;
  jobType: string;
  company: string;
  role: string;
  experience: string;
  location: string;
};

export function TableDemo() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    axios.get(apiEndpoints.jobs.getAll())
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Table>
      <TableCaption>List of latest job opportunities.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Job ID</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>Last Date</TableHead>
          <TableHead>Job Type</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Experience</TableHead>
          <TableHead>Location</TableHead>
          <TableHead className="text-center">View</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobs.map((job) => (
          <TableRow key={job._id}>
            <TableCell>{job.jobId}</TableCell>
            <TableCell>{new Date(job.startDate).toLocaleDateString()}</TableCell>
            <TableCell>{new Date(job.endDate).toLocaleDateString()}</TableCell>
            <TableCell>{job.jobType ? jobTypeMap[job.jobType.toLowerCase()] || job.jobType : "N/A"}</TableCell>
            <TableCell>{job.company}</TableCell>
            <TableCell>{job.role}</TableCell>
            <TableCell>{job.experience}</TableCell>
            <TableCell>{job.location}</TableCell>
            <TableCell className="text-center">
              <Link to={`/job-details/${job.company}/${job.role}/${job._id}`}>
                <button className="text-blue-600 underline hover:text-blue-800 cursor-pointer">
                  View
                </button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
