type Job = {
  _id: string;
  imagelink: string;
  role: string;
  about: string;
  type: string;
  location: string;
  startDate: string;
  jobType: string;
  // add other fields as needed
};

type MainCardProps = {
  job: Job;
};

export default function MainCard({ job }: MainCardProps) {
    return (
        <div key={job._id} className="flex mt-4 justify-center items-center gap-2 flex-col w-76 h-full border-2 rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-200 cursor-pointer ">
                <img src={job.imagelink} alt="" className="w-full h-32 object-fit rounded-lg p-2" />
                <h1 className="text-xl font-semibold text-center tracking-wide mb-1 ">{job.role}</h1>
                <p className="text-sm text-gray-500 text-left ">
                            Start Date: {new Date(job.startDate).toLocaleDateString()}
                        </p>
                {/* <p className="text-sm text-gray-500 text-left m-2 ">{job.startDate}</p> */}
                {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">Apply Now</button> */}
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 mb-4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">View Details</button>
            </div>
    )
}