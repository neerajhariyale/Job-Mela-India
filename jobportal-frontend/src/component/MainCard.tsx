import { useNavigate } from "react-router-dom";

type Job = {
  _id: string;
  imagelink: string;
  role: string;
  about: string;
  type: string;
  location: string;
  startDate: string;
  jobType: string;
  about20Words?: string;
  company?: string;
};

type MainCardProps = {
  job: Job;
};

export default function MainCard({ job }: MainCardProps) {
  const navigate = useNavigate();

const handleViewDetails = () => {
  const jobRoleSlug = job.role.replace(/\s+/g, "-").toLowerCase();
  const jobCompany = job.company?.replace(/\s+/g, "-").toLowerCase() || "company";
  

  navigate(`/job-details/${jobCompany}/${jobRoleSlug}/${job._id}`);
};

  return (
    <div
      key={job._id}
      className="group flex justify-center items-center gap-2 flex-col w-76 h-full border-2 rounded-lg 
             hover:shadow-2xl hover:scale-105 transform transition-all duration-200 cursor-pointer 
             overflow-hidden"
    >
      <img
        src={job.imagelink}
        alt=""
        className="w-full h-32 object-fit  transform transition-transform duration-300 group-hover:scale-105"
      />
      <h1 className="text-xl font-semibold text-center tracking-wide mb-1">{job.role}</h1>
      <p className="p-2">{job.about20Words || job.about?.substring(0, 100) + "..."}</p>
      <p className="text-sm text-gray-500 text-left">
        Start Date: {new Date(job.startDate).toLocaleDateString()}
      </p>
      <button
        onClick={handleViewDetails}
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 mb-4 hover:bg-blue-600 transition-all duration-100 cursor-pointer"
      >
        View Details
      </button>
    </div>
  );
}
