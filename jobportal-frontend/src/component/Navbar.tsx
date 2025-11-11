import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import logo from "../assests/logo1.png"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
    { name: "Home", path: "/" },
    { name: "JobUpdate", path: "/jobupdate" },
    { name: "IT Jobs", path: "/it-jobs" },
    { name: "Non IT Jobs", path: "/non-it-jobs" },
    { name: "Govt. Jobs", path: "/govt-jobs" },
]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <div className="flex justify-between items-center w-11/12 mx-auto h-18 px-4 py-2 md:border-b-1 md:border-gray-300 lg:border-b-1  lg:border-gray-300">
                {/* Logo */}
                <div className="h-full flex justify-center items-center">
                    <img src={logo} alt="Logo" className="w-full h-full content-fit" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-6 text-sm font-medium">
                            {navItems.map((item) => (
                                <NavigationMenuItem key={item.name}>
                                    <NavigationMenuLink asChild>
                                        <Link to={item.path} className="hover:text-blue-600 transition">
                                            {item.name}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Search Field - hidden on mobile */}
                <div className="hidden md:flex w-full max-w-sm items-center gap-2">
                    <Input
                        type="text"
                        placeholder="Enter Job profile or Company Name..."
                        className="shadow-none focus-visible:ring-1 focus-visible:outline-none outline-none"
                    />
                    <Button
                        type="submit"
                        variant="outline"
                        className="hover:bg-black hover:text-white cursor-pointer"
                    >
                        Search
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {menuOpen && (
                <div className="flex flex-col gap-4 px-4 py-2 mb-3 border-b-2 md:hidden text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-blue-600 transition"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}

            <div className="md:hidden lg:hidden mb-4 flex justify-center items-center w-11/12 mx-auto max-w-sm items-center gap-2">
                <Input
                    type="text"
                    placeholder="Enter Job profile or Company Name..."
                    className="shadow-none focus-visible:ring-1 focus-visible:outline-none outline-none"
                />
                <Button
                    type="submit"
                    variant="outline"
                    className="hover:bg-black hover:text-white cursor-pointer"
                >
                    Search
                </Button>
            </div>
        </>
    )
}

export default Navbar
