import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav";
import { BiSolidArrowFromLeft, BiSolidArrowToLeft } from "react-icons/bi";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const { user, logout } = useContext(AuthContext);
    const [adminEmails, setAdminEmails] = useState([]);
    const [memberEmails, setMemberEmails] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

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
                        } bg-[#026C84] text-white transition-all duration-300`}
                >
                    <div className="h-full flex flex-col p-4">
                        <button
                            className="text-xl mb-4 focus:outline-none"
                            onClick={toggleSidebar}
                        >
                            {isSidebarOpen ? <BiSolidArrowToLeft></BiSolidArrowToLeft> : <BiSolidArrowFromLeft></BiSolidArrowFromLeft>}
                        </button>
                        <div className={`${isSidebarOpen ? "block" : "hidden"}`}>
                            <Link to='/dashboard' className="text-2xl font-bold mb-4">Dashboard</Link>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        to="/dashboard/my-profile"
                                        className="block py-2 px-3 rounded hover:bg-[#3999ae]"
                                    >
                                        My Profile
                                    </Link>
                                </li>
                                {adminEmails.includes(user.email) && (
                                    <li>
                                        <Link
                                            to="/dashboard/manage-members"
                                            className="block py-2 px-3 rounded hover:bg-[#3999ae]"
                                        >
                                            Manage Members
                                        </Link>
                                    </li>
                                )}
                                {memberEmails.includes(user.email) && (
                                    <li>
                                        <Link
                                            to="/dashboard/make-payment"
                                            className="block py-2 px-3 rounded hover:bg-[#3999ae]"
                                        >
                                            Make Payment
                                        </Link>
                                    </li>
                                )}
                                {memberEmails.includes(user.email) && (
                                    <li>
                                        <Link
                                            to="/dashboard/payment-history"
                                            className="block py-2 px-3 rounded hover:bg-[#3999ae]"
                                        >
                                            Payment History
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
                                        className="block py-2 px-3 rounded hover:bg-[#3999ae]"
                                    >
                                        {adminEmails.includes(user.email) ? "Make Announcement" : "Announcements"}
                                    </Link>
                                </li>
                                {adminEmails.includes(user.email) && (
                                    <li>
                                        <Link
                                            to="/dashboard/agreement-request"
                                            className="block py-2 px-3 rounded hover:bg-[#3999ae]"
                                        >
                                            Agreement Requests
                                        </Link>
                                    </li>
                                )}
                                {adminEmails.includes(user.email) && (
                                    <li>
                                        <Link
                                            to="/dashboard/manage-coupons"
                                            className="block py-2 px-3 rounded hover:bg-[#3999ae]"
                                        >
                                            Manage Coupons
                                        </Link>
                                    </li>
                                )}
                            </ul>
                            <button
                                onClick={handleLogout}
                                className="block w-full text-start py-2 px-3 rounded hover:bg-[#3999ae]"
                            >
                                LogOut
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