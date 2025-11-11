import { NumberTicker } from "@/components/magicui/number-ticker";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { apiEndpoints } from "@/lib/api";

export function NumberTickerDemo() {
  const [totalJobs, setTotalJobs] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTotalJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiEndpoints.jobs.stats());
        setTotalJobs(response.data.total);
      } catch (error) {
        console.error("Error fetching total jobs:", error);
        toast.error("Failed to fetch job count");
        setTotalJobs(0);
      } finally {
        setLoading(false);
      }
    };

    fetchTotalJobs();
  }, []);

  return (
    <NumberTicker
      value={loading ? 0 : totalJobs}
      className="whitespace-pre-wrap text-7xl font-medium tracking-tighter text-black dark:text-white"
    />
  );
}
