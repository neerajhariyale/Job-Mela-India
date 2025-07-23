import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Link } from "react-router-dom";

const jobs = [
    {
        jobId: "JOB001",
        postDate: "2025-07-01",
        lastDate: "2025-07-15",
        jobType: "Full-Time",
        companyName: "Google",
        jobProfile: "Frontend Developer",
        experienceLevel: "0-1 Yrs",
        location: "Bangalore",
    },
    {
        jobId: "JOB002",
        postDate: "2025-07-03",
        lastDate: "2025-07-20",
        jobType: "Internship",
        companyName: "Microsoft",
        jobProfile: "QA Engineer Intern",
        experienceLevel: "Fresher",
        location: "Hyderabad",
    },
    {
        jobId: "JOB003",
        postDate: "2025-07-04",
        lastDate: "2025-07-25",
        jobType: "Part-Time",
        companyName: "TCS",
        jobProfile: "Support Analyst",
        experienceLevel: "0-2 Yrs",
        location: "Mumbai",
    },
]

export function TableDemo() {
    return (
        <Table>
            <TableCaption>List of latest job opportunities.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Job ID</TableHead>
                    <TableHead>Post Date</TableHead>
                    <TableHead>Last Date</TableHead>
                    <TableHead>Job Type</TableHead>
                    <TableHead>Company Name</TableHead>
                    <TableHead>Job Profile</TableHead>
                    <TableHead>Experience Level</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className="text-center">View Detail</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {jobs.map((job) => (
                    <TableRow key={job.jobId}>
                        <TableCell className="font-medium">{job.jobId}</TableCell>
                        <TableCell>{job.postDate}</TableCell>
                        <TableCell>{job.lastDate}</TableCell>
                        <TableCell>{job.jobType}</TableCell>
                        <TableCell>{job.companyName}</TableCell>
                        <TableCell>{job.jobProfile}</TableCell>
                        <TableCell>{job.experienceLevel}</TableCell>
                        <TableCell>{job.location}</TableCell>
                        <TableCell className="text-center">
                            <Link to={`/job-detail/${job.jobId}`}>
                                <button className="text-blue-600 underline hover:text-blue-800 cursor-pointer">
                                    View
                                </button>
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
