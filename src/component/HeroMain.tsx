import { useEffect, useState } from "react";
import axios from "axios";
import MainCard from "./MainCard";
import { apiEndpoints } from "@/lib/api";

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
        axios.get(apiEndpoints.jobs.getAll())
            .then(res => setJobs(res.data))
            .catch(err => console.error(err));
    }, []);

    const itJobs = jobs.filter(job => job.jobType === "itjobs");
    const nonItJobs = jobs.filter(job => job.jobType === "nonitjobs");
    const govtJobs = jobs.filter(job => job.jobType === "govtjobs");

    return (
        <div className="w-full md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12 mx-auto mt-2 grid md:grid-3 lg:grid-4 ">

            <h1 className="text-3xl font-semibold text-center tracking-wide mb-4 underline dashed mt-3  ">Recent Jobs & Internship</h1>
            <div className=" place-items-center text-center flex gap-8 w-full px-6   mx-auto h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 px-6  ">
                {jobs.map((job) => (
                    <MainCard job={job} />
                ))}
            </div>



            <h1 className="text-3xl font-semibold text-center tracking-wide mb-4 underline dashed mt-8  ">Recent IT Jobs</h1>
            <div className=" flex gap-8 w-full px-6  mx-auto h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 mx-auto ">

                {itJobs.map((job) => (
                    <MainCard job={job} />
                ))}
            </div>



            <h1 className="text-3xl font-semibold text-center tracking-wide mb-4 underline dashed mt-8  ">Recent Non IT Jobs</h1>
            <div className=" flex gap-8 w-full px-6   mx-auto h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 mx-auto  ">

               {nonItJobs.map((job) => (
                    <MainCard job={job} />
                ))}
            </div>



            <h1 className="text-3xl font-semibold text-center tracking-wide mb-4 underline dashed mt-8  ">Recent Govt. Jobs</h1>
            <div className=" flex gap-8 w-full px-6   mx-auto h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 mx-auto  ">

                {govtJobs.map((job) => (
                    <MainCard job={job} />
                ))}
            </div>


        </div>
    )
}

export default HeroMain;
