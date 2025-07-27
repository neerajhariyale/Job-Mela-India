import "./App.css";
import Navbar from "./component/Navbar";
import FooterSection from "./component/FooterSection";
import HeroMain from "./component/HeroMain";
import ItJob from "./pages/ItJob";
import JobUpdate from "./pages/JobUpdate";
import NonItJobs from "./pages/NonItJobs";
import GovtJobs from "./pages/GovtJobs";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import JobPost from "./pages/JobPost"
import AdminViewAllJobs from "./pages/AdminViewAllJobs";

function App() {
  return (
      
      <div className="w-full md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12 mx-auto">
        <Toaster position="top-center" richColors />
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroMain />
                <div className="w-11/12 mx-auto h-content mt-4">
                  <VelocityScroll>Welcome to JobMelaIndia</VelocityScroll>
                </div>
              </>
            }
          />
          <Route path="/jobupdate" element={<JobUpdate />} />
          <Route path="/it-jobs" element={<ItJob />} />
          <Route path="/non-it-jobs" element={<NonItJobs />} />
          <Route path="/govt-jobs" element={<GovtJobs />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/job-post" element={<JobPost />} />
          <Route path="/admin-view-all-jobs" element={<AdminViewAllJobs />} />
          <Route path="/admin-view-all-jobs/page-no/:page" element={<AdminViewAllJobs />} />


        </Routes>

        <FooterSection />
      </div>
    
  );
}

export default App;
