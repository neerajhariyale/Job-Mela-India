import { ChartAreaInteractive } from "@/component/ChartAreaInteractive";
import { RainbowButtonDemo } from "@/component/RainbowButtonDemo";
import { NumberTickerDemo } from "@/component/NumberTickerDemo";
import { Link } from "react-router-dom";
import { TypingAnimationDemo } from "@/component/TypingAnimationDemo";
import { TableDemo } from "@/component/TableDemo";
import { PaginationDemo } from "@/component/PaginationDemo";

function AdminDashboard() {
  // Static values for pagination demo (can be made dynamic)
  const totalJobs = 50;
  const currentPage = 1;
  const jobsPerPage = 10;
  const onPageChange = 2;

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-6">Admin Dashboard</h1>

      <ChartAreaInteractive />

      <div className="flex justify-center items-center mt-6 gap-8">
        <Link to="/job-post">
          <RainbowButtonDemo>Post a Job</RainbowButtonDemo>
        </Link>
        <Link to="/admin-view-all-jobs">
          <RainbowButtonDemo>View All Jobs</RainbowButtonDemo>
        </Link>
        <RainbowButtonDemo>Active Jobs</RainbowButtonDemo>
        <RainbowButtonDemo>Inactive Jobs</RainbowButtonDemo>
      </div>

      <div className="flex flex-col justify-center items-center mt-6">
        <TypingAnimationDemo>Total Job Posted</TypingAnimationDemo>
        <NumberTickerDemo />

        <div className="w-full mt-8">
          <TableDemo />
        </div>

        <div className="mt-4">
          <PaginationDemo
            totalJobs={totalJobs}
            currentPage={currentPage}
            jobsPerPage={jobsPerPage}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
