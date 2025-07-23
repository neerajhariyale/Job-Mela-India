import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  LinkedinIcon,
  TwitterIcon,
  MessageCircleMore,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assests/logo1.png";

const FooterSection = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  // Check admin login status initially and on storage change
  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem("adminLoggedIn");
      setIsAdmin(loggedIn === "true");
    };

    // Initial check
    checkLoginStatus();

    // Listen to localStorage changes across tabs/windows
    window.addEventListener("storage", checkLoginStatus);

    // Cleanup listener
    return () => window.removeEventListener("storage", checkLoginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    setIsAdmin(false);

    // Optional: Notify all components about storage change
    window.dispatchEvent(new Event("storage"));

    // Redirect to homepage
    window.location.href = "/";
  };

  const footerSections = [
    {
      title: "Explore Jobs",
      links: [
        { title: "IT Jobs", href: "#" },
        { title: "Non IT Jobs", href: "#" },
        { title: "Govt. Jobs", href: "#" },
      ],
    },
    {
      title: "About JobMela",
      links: [
        { title: "About us", href: "#" },
        { title: "Contact", href: "#" },
        { title: "Our Mission", href: "#" },
        !isAdmin && { title: "Admin Login", href: "/admin-login" },
        isAdmin && { title: "Admin Dashboard", href: "/admin-dashboard" },
        isAdmin && {
          title: "Admin Logout",
          href: "#",
          onClick: handleLogout,
        },
      ].filter(Boolean),
    },
    {
      title: "For Job Seekers",
      links: [
        { title: "Create Resume", href: "#" },
        { title: "Interview Tips", href: "#" },
        { title: "Job Alerts", href: "#" },
        { title: "Skill Development", href: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { title: "Linkedin", href: "#" },
        { title: "Whatsapp", href: "#" },
        { title: "Facebook", href: "#" },
        { title: "Instagram", href: "#" },
        { title: "Telegram", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { title: "Terms", href: "#" },
        { title: "Privacy", href: "#" },
      ],
    },
  ];

  return (
    <div className="mt-4 flex flex-col w-11/12 mx-auto">
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full xl:col-span-2">
              <img src={logo} alt="Logo" className="w-42 h-24 mx-auto md:w-full md:h-28" />
              <p className="mt-4 text-muted-foreground">
                <strong>JobMelaIndia</strong> – Your daily job update platform helping freshers and professionals find the right opportunities quickly and hassle-free.
              </p>
            </div>

            {footerSections.map(({ title, links }) => (
              <div key={title}>
                <h6 className="font-semibold">{title}</h6>
                <ul className="mt-6 space-y-3">
                  {links.map(({ title, href, onClick }) => (
                    <li key={title}>
                      <Link
                        to={href}
                        onClick={onClick}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link to="/" className="hover:text-black">
                Job-Mela-India
              </Link>
              . All rights reserved.
            </span>
            <div className="flex items-center gap-5 text-muted-foreground">
              <Link to="#" target="_blank"><TwitterIcon className="h-5 w-5 hover:text-black" /></Link>
              <Link to="#" target="_blank"><LinkedinIcon className="h-5 w-5 hover:text-black" /></Link>
              <Link to="#" target="_blank"><MessageCircleMore className="h-5 w-5 hover:text-black" /></Link>
              <Link to="#" target="_blank"><Send className="h-5 w-5 hover:text-black" /></Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
