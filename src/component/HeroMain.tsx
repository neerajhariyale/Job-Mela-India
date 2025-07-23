function HeroMain() {
    return (
        <div className="w-full md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12 mx-auto mt-2">

            <h1 className="text-3xl font-semibold text-center tracking-wide mb-4 underline dashed mt-3  ">Recent Jobs & Internship</h1>
            <div className=" flex gap-8 w-full px-6  mx-auto h-full md:overflow-x-auto md:flex-row flex-col   ">

                <div className="flex mt-4 justify-center items-center gap-2 flex-col w-full h-full border-2 rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-200 cursor-pointer ">
                    <img src="https://www.gesi.org/wp-content/uploads/2024/08/TATA-Consultancy-Services-Limited_logo-e1735658383137.png" alt="" className="w-full h-32 object-fit rounded-lg p-2" />
                    <h1 className="text-2xl font-semibold text-center tracking-wide mb-1 ">TCS Hiring - Freshers 2025</h1>
                    <p className="text-sm text-gray-500 text-left m-2 ">With operations in over 46 countries, TCS partners with businesses worldwide to drive innovation, digital transformation, and operational excellence. The company offers a wide range of services, including cloud computing, AI, cybersecurity, and data analytics, across diverse industries. TCS is committed to delivering sustainable, tech-driven solutions that help organizations enhance efficiency, improve customer experience, and achieve lasting growth.</p>
                    {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">Apply Now</button> */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 mb-4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">View Details</button>
                </div>



                <div className="flex mt-4 justify-center items-center gap-2 flex-col w-full h-full border-2 rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-200 cursor-pointer ">
                    <img src="https://www.gesi.org/wp-content/uploads/2024/08/TATA-Consultancy-Services-Limited_logo-e1735658383137.png" alt="" className="w-full h-32 object-fit rounded-lg " />
                    <h1 className="text-2xl font-semibold text-center tracking-wide mb-1 ">TCS Hiring - Freshers 2025</h1>
                    <p className="text-sm text-gray-500 text-left m-2 ">With operations in over 46 countries, TCS partners with businesses worldwide to drive innovation, digital transformation, and operational excellence. The company offers a wide range of services, including cloud computing, AI, cybersecurity, and data analytics, across diverse industries. TCS is committed to delivering sustainable, tech-driven solutions that help organizations enhance efficiency, improve customer experience, and achieve lasting growth.</p>
                    {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">Apply Now</button> */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 mb-4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">View Details</button>
                </div>



                <div className="flex mt-4 justify-center items-center gap-2 flex-col w-full h-full border-2 rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-200 cursor-pointer mb-8 ">
                    <img src="data:image/png;base64,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" alt="" className="w-full h-32 object-fit rounded-lg " />
                    <h1 className="text-2xl font-semibold text-center tracking-wide mb-1 ">TCS Hiring - Freshers 2025</h1>
                    <p className="text-sm text-gray-500 text-left m-2 ">With operations in over 46 countries, TCS partners with businesses worldwide to drive innovation, digital transformation, and operational excellence. The company offers a wide range of services, including cloud computing, AI, cybersecurity, and data analytics, across diverse industries. TCS is committed to delivering sustainable, tech-driven solutions that help organizations enhance efficiency, improve customer experience, and achieve lasting growth.</p>
                    {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">Apply Now</button> */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 mb-4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">View Details</button>
                </div>
            </div>



            <h1 className="text-3xl font-semibold text-center tracking-wide mb-4 underline dashed mt-3  ">Recent IT Jobs</h1>
            <div className=" flex gap-8 w-full px-6  mx-auto h-full md:overflow-x-auto md:flex-row flex-col   ">

                <div className="flex mt-4 justify-center items-center gap-2 flex-col w-full h-full border-2 rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-200 cursor-pointer ">
                    <img src="https://www.gesi.org/wp-content/uploads/2024/08/TATA-Consultancy-Services-Limited_logo-e1735658383137.png" alt="" className="w-full h-32 object-fit rounded-lg p-2" />
                    <h1 className="text-2xl font-semibold text-center tracking-wide mb-1 ">TCS Hiring - Freshers 2025</h1>
                    <p className="text-sm text-gray-500 text-left m-2 ">With operations in over 46 countries, TCS partners with businesses worldwide to drive innovation, digital transformation, and operational excellence. The company offers a wide range of services, including cloud computing, AI, cybersecurity, and data analytics, across diverse industries. TCS is committed to delivering sustainable, tech-driven solutions that help organizations enhance efficiency, improve customer experience, and achieve lasting growth.</p>
                    {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">Apply Now</button> */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 mb-4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">View Details</button>
                </div>



                <div className="flex mt-4 justify-center items-center gap-2 flex-col w-full h-full border-2 rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-200 cursor-pointer ">
                    <img src="https://www.gesi.org/wp-content/uploads/2024/08/TATA-Consultancy-Services-Limited_logo-e1735658383137.png" alt="" className="w-full h-32 object-fit rounded-lg " />
                    <h1 className="text-2xl font-semibold text-center tracking-wide mb-1 ">TCS Hiring - Freshers 2025</h1>
                    <p className="text-sm text-gray-500 text-left m-2 ">With operations in over 46 countries, TCS partners with businesses worldwide to drive innovation, digital transformation, and operational excellence. The company offers a wide range of services, including cloud computing, AI, cybersecurity, and data analytics, across diverse industries. TCS is committed to delivering sustainable, tech-driven solutions that help organizations enhance efficiency, improve customer experience, and achieve lasting growth.</p>
                    {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">Apply Now</button> */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 mb-4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">View Details</button>
                </div>



                <div className="flex mt-4 justify-center items-center gap-2 flex-col w-full h-full border-2 rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-200 cursor-pointer mb-8 ">
                    <img src="https://www.gesi.org/wp-content/uploads/2024/08/TATA-Consultancy-Services-Limited_logo-e1735658383137.png" alt="" className="w-full h-32 object-fit rounded-lg " />
                    <h1 className="text-2xl font-semibold text-center tracking-wide mb-1 ">TCS Hiring - Freshers 2025</h1>
                    <p className="text-sm text-gray-500 text-left m-2 ">With operations in over 46 countries, TCS partners with businesses worldwide to drive innovation, digital transformation, and operational excellence. The company offers a wide range of services, including cloud computing, AI, cybersecurity, and data analytics, across diverse industries. TCS is committed to delivering sustainable, tech-driven solutions that help organizations enhance efficiency, improve customer experience, and achieve lasting growth.</p>
                    {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">Apply Now</button> */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 mb-4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">View Details</button>
                </div>
            </div>


            <h1 className="text-3xl font-semibold text-center tracking-wide mb-4 underline dashed mt-3  ">Recent Non IT Jobs</h1>
            <div className=" flex gap-8 w-full px-6  mx-auto h-full md:overflow-x-auto md:flex-row flex-col   ">

                <div className="flex mt-4 justify-center items-center gap-2 flex-col w-full h-full border-2 rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-200 cursor-pointer ">
                    <img src="https://www.gesi.org/wp-content/uploads/2024/08/TATA-Consultancy-Services-Limited_logo-e1735658383137.png" alt="" className="w-full h-32 object-fit rounded-lg p-2" />
                    <h1 className="text-2xl font-semibold text-center tracking-wide mb-1 ">TCS Hiring - Freshers 2025</h1>
                    <p className="text-sm text-gray-500 text-left m-2 ">With operations in over 46 countries, TCS partners with businesses worldwide to drive innovation, digital transformation, and operational excellence. The company offers a wide range of services, including cloud computing, AI, cybersecurity, and data analytics, across diverse industries. TCS is committed to delivering sustainable, tech-driven solutions that help organizations enhance efficiency, improve customer experience, and achieve lasting growth.</p>
                    {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">Apply Now</button> */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 mb-4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">View Details</button>
                </div>



                <div className="flex mt-4 justify-center items-center gap-2 flex-col w-full h-full border-2 rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-200 cursor-pointer ">
                    <img src="https://www.gesi.org/wp-content/uploads/2024/08/TATA-Consultancy-Services-Limited_logo-e1735658383137.png" alt="" className="w-full h-32 object-fit rounded-lg " />
                    <h1 className="text-2xl font-semibold text-center tracking-wide mb-1 ">TCS Hiring - Freshers 2025</h1>
                    <p className="text-sm text-gray-500 text-left m-2 ">With operations in over 46 countries, TCS partners with businesses worldwide to drive innovation, digital transformation, and operational excellence. The company offers a wide range of services, including cloud computing, AI, cybersecurity, and data analytics, across diverse industries. TCS is committed to delivering sustainable, tech-driven solutions that help organizations enhance efficiency, improve customer experience, and achieve lasting growth.</p>
                    {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">Apply Now</button> */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 mb-4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">View Details</button>
                </div>



                <div className="flex mt-4 justify-center items-center gap-2 flex-col w-full h-full border-2 rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-200 cursor-pointer mb-8 ">
                    <img src="https://contentstatic.techgig.com/photo/117594390/is-cognizants-campus-in-visakhapatnam-the-future-of-tier-2-cities.jpg?6242" alt="" className="w-full h-32 object-fit rounded-lg " />
                    <h1 className="text-2xl font-semibold text-center tracking-wide mb-1 ">TCS Hiring - Freshers 2025</h1>
                    <p className="text-sm text-gray-500 text-left m-2 ">With operations in over 46 countries, TCS partners with businesses worldwide to drive innovation, digital transformation, and operational excellence. The company offers a wide range of services, including cloud computing, AI, cybersecurity, and data analytics, across diverse industries. TCS is committed to delivering sustainable, tech-driven solutions that help organizations enhance efficiency, improve customer experience, and achieve lasting growth.</p>
                    {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">Apply Now</button> */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 mb-4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">View Details</button>
                </div>
            </div>




            <h1 className="text-3xl font-semibold text-center tracking-wide mb-4 underline dashed mt-3  ">Recent Govt. Jobs</h1>
            <div className=" flex gap-8 w-full px-6  mx-auto h-full md:overflow-x-auto md:flex-row flex-col   ">

                <div className="flex mt-4 justify-center items-center gap-2 flex-col w-full h-full border-2 rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-200 cursor-pointer ">
                    <img src="https://www.gesi.org/wp-content/uploads/2024/08/TATA-Consultancy-Services-Limited_logo-e1735658383137.png" alt="" className="w-full h-32 object-fit rounded-lg p-2" />
                    <h1 className="text-2xl font-semibold text-center tracking-wide mb-1 ">TCS Hiring - Freshers 2025</h1>
                    <p className="text-sm text-gray-500 text-left m-2 ">With operations in over 46 countries, TCS partners with businesses worldwide to drive innovation, digital transformation, and operational excellence. The company offers a wide range of services, including cloud computing, AI, cybersecurity, and data analytics, across diverse industries. TCS is committed to delivering sustainable, tech-driven solutions that help organizations enhance efficiency, improve customer experience, and achieve lasting growth.</p>
                    {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">Apply Now</button> */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 mb-4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">View Details</button>
                </div>



                <div className="flex mt-4 justify-center items-center gap-2 flex-col w-full h-full border-2 rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-200 cursor-pointer ">
                    <img src="https://www.gesi.org/wp-content/uploads/2024/08/TATA-Consultancy-Services-Limited_logo-e1735658383137.png" alt="" className="w-full h-32 object-fit rounded-lg " />
                    <h1 className="text-2xl font-semibold text-center tracking-wide mb-1 ">TCS Hiring - Freshers 2025</h1>
                    <p className="text-sm text-gray-500 text-left m-2 ">With operations in over 46 countries, TCS partners with businesses worldwide to drive innovation, digital transformation, and operational excellence. The company offers a wide range of services, including cloud computing, AI, cybersecurity, and data analytics, across diverse industries. TCS is committed to delivering sustainable, tech-driven solutions that help organizations enhance efficiency, improve customer experience, and achieve lasting growth.</p>
                    {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">Apply Now</button> */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 mb-4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">View Details</button>
                </div>



                <div className="flex mt-4 justify-center items-center gap-2 flex-col w-full h-full border-2 rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-200 cursor-pointer mb-8 ">
                    <img src="https://www.gesi.org/wp-content/uploads/2024/08/TATA-Consultancy-Services-Limited_logo-e1735658383137.png" alt="" className="w-full h-32 object-fit rounded-lg " />
                    <h1 className="text-2xl font-semibold text-center tracking-wide mb-1 ">TCS Hiring - Freshers 2025</h1>
                    <p className="text-sm text-gray-500 text-left m-2 ">With operations in over 46 countries, TCS partners with businesses worldwide to drive innovation, digital transformation, and operational excellence. The company offers a wide range of services, including cloud computing, AI, cybersecurity, and data analytics, across diverse industries. TCS is committed to delivering sustainable, tech-driven solutions that help organizations enhance efficiency, improve customer experience, and achieve lasting growth.</p>
                    {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">Apply Now</button> */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4 mb-4 hover:bg-blue-600 transition-all duration-100 cursor-pointer">View Details</button>
                </div>
            </div>


            


        </div>
    )
}

export default HeroMain;
