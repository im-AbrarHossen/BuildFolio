import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Avatar from "../assets/images/Avatar.png";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [imgSrc, setImgSrc] = useState(user?.photoURL || Avatar);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const handleImageError = () => {
        setImgSrc(Avatar); // Fallback to Avatar on error
    };

    return (
        <div className="flex justify-between items-center w-11/12 mx-auto bg-gray-300 rounded px-2">
            <details className="dropdown lg:hidden">
                <summary className="btn bg-[#026C84] text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </summary>
                <ul
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 w-52 p-2 shadow">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/apartment">Apartment</NavLink></li>
                </ul>
            </details>
            <Link to="/" className="flex lg:flex-row flex-col items-center lg:ml-[-20px]">
                <img className="lg:w-[90px] md:w-[80px] sm:w-[70px] w-[60px]" src={logo} alt="" />
                <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold text-[#026C84] lg:ml-[-12px]">BuildFolio</h1>
            </Link>
            <div className="hidden lg:flex lg:gap-5">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/apartment">Apartment</NavLink></li>
                    </ul>
                </div>
            </div>
            <div>
                {
                    user && user?.email ? (
                        <div className="flex items-center gap-2">
                            <div className="relative group">
                                <img
                                    src={imgSrc}
                                    alt="User Avatar"
                                    onError={handleImageError}
                                    className="lg:h-12 h-8 lg:w-12 w-8 rounded-full cursor-pointer"
                                />
                                <div className="w-[125px] absolute bg-base-300 rounded-lg lg:left-1/2 left-[-23px] transform -translate-x-1/2 lg:top-12 top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2 p-3 z-50">
                                    <span className="text-sm text-gray-700 font-medium">
                                        {user.displayName || "User"}
                                    </span>
                                    <NavLink className="btn" to="/dashboard">Dashboard</NavLink>
                                    <button
                                        onClick={handleLogout}
                                        className="btn text-white bg-[#026C84] hover:bg-[#2c8a9f] w-full"
                                    >
                                        LogOut
                                    </button>
                                </div>
                            </div>

                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Link to="/auth/login" className="btn text-white bg-[#026C84] hover:bg-[#2c8a9f]">Login</Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;