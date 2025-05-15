import Lottie from "lottie-react";
import loginLottie from "../../assets/lottie/login.json";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {FaGoogle} from "react-icons/fa";
import AuthContext from "../../Provider/AuthContext";
import {useContext} from "react";
import toast from "react-hot-toast";

const Login = () => {
  const {loginUser, setUser, googleLogIn} = useContext(AuthContext);
  //! for navigate path
  const location = useLocation();
  const navigate = useNavigate();

  // ? handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state || "/");
        toast.success(`Welcome successfully logged in.`);
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(` Don’t have an account? Register please _!!`);
      });

    form.reset();
  };

  // ! google login

  const handleGoogleLogin = async () => {
    try {
      //  Google login
      const result = await googleLogIn();
      const user = result.user;
      setUser(user);

      // Navigate and show success message
      navigate(location?.state || "/");
      toast.success(`Welcome successfully logged in.`);
    } catch (err) {
      // Handle errors
      toast.error(`Google Login Failed: ${err.message}`);
    }
  };

  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left ">
            <Lottie
              className="w-full h-96"
              animationData={loginLottie}
            ></Lottie>
          </div>
          {/*  */}
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-2xl font-bold mt-10 ml-8">Login now!</h1>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Google Login */}
              <div className="my-2">
                <button
                  onClick={handleGoogleLogin}
                  type="button"
                  className="w-full bg-green-500 btn btn-outline text-white py-2 rounded-md focus:outline-none focus:ring focus:ring-red-300"
                >
                  Login with Google <FaGoogle className="inline-block ml-1" />
                </button>
              </div>
              <div className="form-control ">
                <button className="btn btn-outline">Login</button>
              </div>
            </form>
            {/* register */}
            <div className="text-center mb-10">
              <p className="text-sm text-gray-600">
                Don’t have an account?
                <Link to="/register" className=" hover:underline font-medium">
                  register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
