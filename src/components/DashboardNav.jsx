import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const DashboardNav = ({ isSidebarOpen }) => {

    return (
        <nav className={`fixed top-0 right-0 h-16 bg-gray-400 text-white flex items-center transition-all duration-300 ${isSidebarOpen ? "lg:w-[calc(100%-16rem)] w-[calc(100%-220px)]" : "w-[calc(100%-4rem)]"
            }`}>
            {/* Sidebar Toggle Icon */}
            <div className="w-full flex justify-end">
                {/* Navbar Title */}
                <Link to="/" className="flex items-center">
                    <img className="w-[50px]" src={logo} alt="" />
                    <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold text-[#026C84]">BuildFolio</h1>
                </Link>
            </div>
        </nav>
    );
};

export default DashboardNav;