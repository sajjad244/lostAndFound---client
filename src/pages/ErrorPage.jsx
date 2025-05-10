import {Link} from "react-router-dom";
import errorImage from "../assets/error.jpg";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="text-center">
        <img src={errorImage} alt="Error" className="w-64 mx-auto mb-6" />
        <p className="mt-4 text-2xl font-semibold text-gray-800">
          Oops! Page Not Found
        </p>
        <p className="mt-2 text-gray-600">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className="mt-6 btn btn-outline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
