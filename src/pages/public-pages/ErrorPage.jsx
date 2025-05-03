import { Link } from "react-router-dom";
import ErrorImage from "../../assets/images/404.svg"

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen text-center">
            <div className="w-11/12 mx-auto flex flex-col items-center">
                <img className="w-full h-[400px]" src={ErrorImage} alt="svg" />
                <Link to="/" className="btn bg-primary text-white hover:bg-secondary">Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;