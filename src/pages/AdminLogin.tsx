import { MagicCardDemo } from "../component/MagicCardDemo";


function AdminLogin() {
    return (
        <div className="w-full md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12 h-full mx-auto  flex flex-col justify-center items-center">
            <div className="w-full h-full flex flex-col justify-center items-center mt-8">
                <h1 className="text-3xl font-semibold text-center tracking-wide mb-16 ">Admin Login ⚠️</h1>
                <MagicCardDemo/>
            </div>
            
        </div>
    )
}

export default AdminLogin;