import { AdminCardDemo1 } from "@/component/AdminCardDemo1";
import { TypingAnimationDemo } from "@/component/TypingAnimationDemo";

function AdminViewAllJobs() {
    return (
        <div className="w-full md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12 h-full mx-auto  flex flex-col justify-center items-center">
            <TypingAnimationDemo>View All Jobs</TypingAnimationDemo>
            <AdminCardDemo1 />
        </div>
    );
}

export default AdminViewAllJobs;