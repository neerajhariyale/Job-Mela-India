import { useEffect, useState } from "react";
import axios from "axios";
import MainCard from "./MainCard";

type Job = {
    _id: string;
    imagelink: string;
    role: string;
    about: string;
    type: string;
    location: string;
    startDate: string;
    jobType: string; // <-- Add this line
    // add other fields as needed
};

function HeroMain() {
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        axios.get("https://job-mela-india-a3oq.vercel.app/api/jobs")
            .then(res => setJobs(res.data))
            .catch(err => console.error(err));
    }, []);

    const itJobs = jobs.filter(job => job.jobType === "itjobs");
    const nonItJobs = jobs.filter(job => job.jobType === "nonitjobs");
    const govtJobs = jobs.filter(job => job.jobType === "govtjobs");

    return (
        <div className="w-full md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12 mx-auto mt-2">

            <h1 className="text-3xl font-semibold text-center tracking-wide mb-4 underline dashed mt-3  ">Recent Jobs & Internship</h1>
            <div className=" flex gap-8 w-full px-6   mx-auto h-full   ">
                {jobs.map((job) => (
                    <MainCard job={job} />
                ))}
            </div>



            <h1 className="text-3xl font-semibold text-center tracking-wide mb-4 underline dashed mt-3  ">Recent IT Jobs</h1>
            <div className=" flex gap-8 w-full px-6  mx-auto h-full  ">

                {itJobs.map((job) => (
                    <MainCard job={job} />
                ))}
            </div>



            <h1 className="text-3xl font-semibold text-center tracking-wide mb-4 underline dashed mt-3  ">Recent Non IT Jobs</h1>
            <div className=" flex gap-8 w-full px-6  mx-auto h-full md:overflow-x-auto md:flex-row flex-col   ">

                {nonItJobs.map((job) => (
                    <div key={job._id} className="flex mt-4 justify-center items-center gap-2 flex-col w-full h-full border-2 rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-200 cursor-pointer ">
                        <img src={job.imagelink} alt="" className="w-full h-32 object-fit rounded-lg p-2" />
                        <h1 className="text-2xl font-semibold text-center tracking-wide mb-1 ">{job.role}</h1>
                        <p className="text-sm text-gray-500 text-left m-2 ">{job.about}</p>
                        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">Apply Now</button> */}
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 mb-4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">View Details</button>
                    </div>
                ))}
            </div>



            <h1 className="text-3xl font-semibold text-center tracking-wide mb-4 underline dashed mt-3  ">Recent Govt. Jobs</h1>
            <div className=" flex gap-8 w-full px-6  mx-auto h-full md:overflow-x-auto md:flex-row flex-col   ">

                {govtJobs.map((job) => (
                    <MainCard job={job} />
                ))}
            </div>


        </div>
    )
}

export default HeroMain;
