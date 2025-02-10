import {Link} from "react-router-dom";

const ErrorPage = () => {
  //error page
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-800">
          Oops! Page Not Found
        </p>
        <p className="mt-2 text-gray-600">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-blue-700 font-bold"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
