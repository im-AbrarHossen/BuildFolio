import { FaInstagram, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import logo from "../assets/images/logo.png"

const Footer = () => {
    return (
        <footer className="w-full bg-[#026C84] text-white flex flex-col items-center justify-center py-10 gap-6">
            <div className="flex flex-col items-center">
                <img className="lg:w-[100px] w-[80px]" src={logo} alt="" />
                <p className="font-bold text-2xl">BuildFolio</p>
                <p className="font-medium text-lg mb-6 text-center">Innovative Solutions for Modern Buildings</p>
                <p className="text-sm text-center">Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
            <div>
                <div className="flex items-center gap-6">
                    <a href="https://www.facebook.com/abrarhossen273" target="_blank"><FaSquareFacebook></FaSquareFacebook></a>
                    <a href="https://www.instagram.com/whose_abrar" target="_blank"><FaInstagram></FaInstagram></a>
                    <a href="https://www.linkedin.com/in/im-AbrarHossen" target="_blank"><FaLinkedin></FaLinkedin></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;