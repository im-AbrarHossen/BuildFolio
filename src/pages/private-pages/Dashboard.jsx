import { useContext, useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav";
import { BiSolidArrowFromLeft, BiSolidArrowToLeft } from "react-icons/bi";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { CgLogOut, CgProfile } from "react-icons/cg";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdOutlineDashboardCustomize, MdPayments } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { VscRequestChanges } from "react-icons/vsc";
import { SiGoogletagmanager } from "react-icons/si";
import { RiCoupon3Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const { user, logout } = useContext(AuthContext);
    const [adminEmails, setAdminEmails] = useState([]);
    const [memberEmails, setMemberEmails] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const isActive = (path) => location.pathname === path;

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const adminResponse = await axios.get(
                    "https://building-management-server-seven.vercel.app/admin"
                );
                const memberResponse = await axios.get(
                    "https://building-management-server-seven.vercel.app/members"
                );

                setAdminEmails(adminResponse.data.map((admin) => admin.userEmail));
                setMemberEmails(memberResponse.data.map((member) => member.userEmail));
            } catch (error) {
                console.error("Error fetching roles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRoles();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="min-h-screen flex flex-col">
            {/* Dashboard Layout */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <aside
                    className={`${isSidebarOpen ? "lg:w-64 w-[220px]" : "w-16"
                        } bg-primary text-white transition-all duration-300`}
                >
                    <div className="h-full flex flex-col p-4">
                        <button
                            className="text-xl mb-4 focus:outline-none"
                            onClick={toggleSidebar}
                        >
                            {isSidebarOpen ? <BiSolidArrowToLeft></BiSolidArrowToLeft> : <BiSolidArrowFromLeft></BiSolidArrowFromLeft>}
                        </button>
                        <div className="flex flex-col gap-3">
                            <Link to='/dashboard' className="text-2xl font-bold mb-4">
                                {isSidebarOpen ? "Dashboard" : <span className="text-xl"><MdOutlineDashboardCustomize className="ml-2" /></span>}
                            </Link>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        to="/dashboard/my-profile"
                                        className={`px-3 py-2 border-none rounded w-full text-white flex flex-row items-center ${isActive("/dashboard/my-profile") ? "bg-secondary" : "bg-transparent hover:bg-secondary"}`}
                                    >
                                        {isSidebarOpen ? "Profile" : <span className="text-xl"><CgProfile className="mx-[-6px]" /></span>}
                                    </Link>
                                </li>
                                {adminEmails.includes(user.email) && (
                                    <li>
                                        <Link
                                            to="/dashboard/manage-members"
                                            className={`px-3 py-2 border-none rounded w-full text-white flex flex-row items-center ${isActive("/dashboard/manage-members") ? "bg-secondary" : "bg-transparent hover:bg-secondary"}`}
                                        >
                                            {isSidebarOpen ? "Manage Members" : <span className="text-xl"><SiGoogletagmanager className="mx-[-6px]" /></span>}
                                        </Link>
                                    </li>
                                )}
                                {memberEmails.includes(user.email) && (
                                    <li>
                                        <Link
                                            to="/dashboard/make-payment"
                                            className={`px-3 py-2 border-none rounded w-full text-white flex flex-row items-center ${isActive("/dashboard/make-payment") ? "bg-secondary" : "bg-transparent hover:bg-secondary"}`}
                                        >
                                            {isSidebarOpen ? "Make Payment" : <span className="text-xl"><MdPayments className="mx-[-6px]" /></span>}
                                        </Link>
                                    </li>
                                )}
                                {memberEmails.includes(user.email) && (
                                    <li>
                                        <Link
                                            to="/dashboard/payment-history"
                                            className={`px-3 py-2 border-none rounded w-full text-white flex flex-row items-center ${isActive("/dashboard/payment-history") ? "bg-secondary" : "bg-transparent hover:bg-secondary"}`}
                                        >
                                            {isSidebarOpen ? "Payment History" : <span className="text-xl"><FaHistory className="mx-[-6px]" /></span>}
                                        </Link>
                                    </li>
                                )}
                                <li>
                                    <Link
                                        to={
                                            adminEmails.includes(user.email)
                                                ? "/dashboard/make-announcements"
                                                : "/dashboard/announcements"
                                        }
                                        className={`pl-3 py-2 border-none rounded w-full text-white flex items-center gap-3 ${isActive(
                                            adminEmails.includes(user.email)
                                                ? "/dashboard/make-announcements"
                                                : "/dashboard/announcements"
                                        )
                                            ? "bg-secondary"
                                            : "bg-transparent hover:bg-secondary"
                                            }`}
                                    >

                                        {isSidebarOpen ?
                                            <span>
                                                {adminEmails.includes(user.email)
                                                    ? "Make Announcement"
                                                    : "Announcements"}
                                            </span> : <TfiAnnouncement className="text-xl ml-[-6px]" />
                                        }
                                    </Link>
                                </li>
                                {adminEmails.includes(user.email) && (
                                    <li>
                                        <Link
                                            to="/dashboard/agreement-request"
                                            className={`px-3 py-2 border-none rounded w-full text-white flex flex-row items-center ${isActive("/dashboard/agreement-request") ? "bg-secondary" : "bg-transparent hover:bg-secondary"}`}
                                        >
                                            {isSidebarOpen ? "Agreement Requests" : <span className="text-xl"><VscRequestChanges className="mx-[-6px]" /></span>}
                                        </Link>
                                    </li>
                                )}
                                {adminEmails.includes(user.email) && (
                                    <li>
                                        <Link
                                            to="/dashboard/manage-coupons"
                                            className={`px-3 py-2 border-none rounded w-full text-white flex flex-row items-center ${isActive("/dashboard/manage-coupons") ? "bg-secondary" : "bg-transparent hover:bg-secondary"}`}
                                        >
                                            {isSidebarOpen ? "Manage Coupons" : <span className="text-xl"><RiCoupon3Fill className="mx-[-6px]" /></span>}
                                        </Link>
                                    </li>
                                )}
                                <li>
                                    <Link
                                        to="/dashboard/settings"
                                        className={`px-3 py-2 border-none rounded w-full text-white flex flex-row items-center ${isActive("/dashboard/settings") ? "bg-secondary" : "bg-transparent hover:bg-secondary"}`}
                                    >
                                        {isSidebarOpen ? "Settings" : <span className="text-xl"><IoMdSettings className="mx-[-6px]" /></span>}
                                    </Link>
                                </li>
                            </ul>
                            <button
                                onClick={handleLogout}
                                className="block w-full text-start py-2 pl-3 rounded hover:bg-secondary"
                            >
                                {isSidebarOpen ? "Logout" : <span className="text-xl"><CgLogOut className="ml-[-5px]" /></span>}
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <div
                    className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? "ml-0" : "ml-0"
                        }`}
                >
                    {/* Navbar */}
                    <DashboardNav isSidebarOpen={isSidebarOpen} />

                    {/* Main Dashboard Content */}
                    <main className="flex-1  bg-gray-100">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;