import { NumberTickerDemo } from "./NumberTickerDemo";
import { JobStatsTicker } from "./JobStatsTicker";

export function JobStatsDemo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Job Portal Statistics
      </h1>
      
      {/* Simple Total Count */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-center mb-4">
          Simple Total Jobs Counter
        </h2>
        <div className="flex justify-center">
          <NumberTickerDemo />
        </div>
      </div>
      
      {/* Detailed Statistics */}
      <div>
        <h2 className="text-xl font-semibold text-center mb-4">
          Detailed Job Statistics
        </h2>
        <div className="max-w-4xl mx-auto">
          <JobStatsTicker />
        </div>
      </div>
    </div>
  );
} 