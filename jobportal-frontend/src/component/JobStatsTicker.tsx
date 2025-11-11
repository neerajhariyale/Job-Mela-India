import { NumberTicker } from "@/components/magicui/number-ticker";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

interface JobStats {
  total: number;
  internship: number;
  it: number;
  nonit: number;
  govt: number;
}

export function JobStatsTicker() {
  const [stats, setStats] = useState<JobStats>({
    total: 0,
    internship: 0,
    it: 0,
    nonit: 0,
    govt: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobStats = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/jobs/stats");
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching job stats:", error);
        toast.error("Failed to fetch job statistics");
      } finally {
        setLoading(false);
      }
    };

    fetchJobStats();
  }, []);

  return (
    <div className="space-y-6">
      {/* Total Jobs */}
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
          Total Jobs Posted
        </h3>
        <NumberTicker
          value={loading ? 0 : stats.total}
          className="whitespace-pre-wrap text-6xl font-bold tracking-tighter text-blue-600 dark:text-blue-400"
        />
      </div>

      {/* Job Type Breakdown */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
            Internships
          </h4>
          <NumberTicker
            value={loading ? 0 : stats.internship}
            className="whitespace-pre-wrap text-2xl font-semibold tracking-tighter text-purple-600 dark:text-purple-400"
          />
        </div>
        
        <div className="text-center">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
            IT Jobs
          </h4>
          <NumberTicker
            value={loading ? 0 : stats.it}
            className="whitespace-pre-wrap text-2xl font-semibold tracking-tighter text-green-600 dark:text-green-400"
          />
        </div>
        
        <div className="text-center">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
            Non-IT Jobs
          </h4>
          <NumberTicker
            value={loading ? 0 : stats.nonit}
            className="whitespace-pre-wrap text-2xl font-semibold tracking-tighter text-orange-600 dark:text-orange-400"
          />
        </div>
        
        <div className="text-center">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
            Government Jobs
          </h4>
          <NumberTicker
            value={loading ? 0 : stats.govt}
            className="whitespace-pre-wrap text-2xl font-semibold tracking-tighter text-red-600 dark:text-red-400"
          />
        </div>
      </div>
    </div>
  );
} 