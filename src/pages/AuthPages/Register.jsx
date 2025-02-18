import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Register = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
            return;
        }

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Successfully Registered',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                            .then(() => {
                                navigate(location?.state ? location.state : "/");
                            });
                    })
                    .catch((err) => {
                        toast.error(err);
                    });
            })
            .catch((error) => {
                toast.error(error.code);
                toast.error(error.message);
            })
    };


    return (
        <div>
            <header className="bg-[#026C84] py-2 w-full fixed top-0 left-0 z-50">
                <Navbar></Navbar>
            </header>
            <main className="py-10 grid place-items-center mt-[100px]">
                <div className="bg-base-100 shrink-0 shadow-2xl rounded-xl border">
                    <form onSubmit={handleSubmit} className="p-6">
                        <div className="mb-5">
                            <h1 className="text-center text-[35px] font-[600] text-[#403F3F]">Register your account</h1>
                        </div>
                        <hr />
                        <div className="form-control mt-5">
                            <label className="label">
                                <span className="label-text text-[20px] font-[600] text-[#403F3F]">Your Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-5">
                            <label className="label">
                                <span className="label-text text-[20px] font-[600] text-[#403F3F]">Photo URL</span>
                            </label>
                            <input name="photo" type="url" placeholder="Enter photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-5">
                            <label className="label">
                                <span className="label-text text-[20px] font-[600] text-[#403F3F]">Email address</span>
                            </label>
                            <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[20px] font-[600] text-[#403F3F]">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    name="password"
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisible ? (
                                        <FaEyeSlash></FaEyeSlash>
                                    ) : (
                                        <FaEye></FaEye>
                                    )}
                                </button>
                            </div>
                            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                        </div>
                        <div className="form-control mt-5">
                            <label className="label justify-end gap-3 flex-row-reverse cursor-pointer">
                                <span className="label-text">Accept Term & Conditions</span>
                                <input name="check" type="checkbox" className="checkbox" required />
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#403F3F] text-white">Register</button>
                        </div>
                        <div className="mt-5">
                            <p className="text-center text-[16px] font-[600] text-[#706F6F]">Already Have An Account ? <Link to="/login" className="text-[#026C84]">Login</Link> </p>
                        </div>
                    </form>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;