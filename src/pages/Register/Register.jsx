import Lottie from "lottie-react";
import registerLottie from "../../assets/lottie/register.json";
import {useContext} from "react";
import AuthContext from "../../Provider/AuthContext";

const Register = () => {
  const {createNewUser} = useContext(AuthContext);

  // ? handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    console.log(name, email, photoURL, password);

    //! Password validation regex
    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    // if (!passwordRegex.test(password)) {
    //   alert("Password must be at least 6 characters long and contain at least one letter and one number");
    //   return;
    // }

    // ? create new user
    createNewUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
          <div className="text-center lg:text-left ">
            <Lottie className="w-64" animationData={registerLottie}></Lottie>
          </div>
          {/*  */}
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-2xl font-bold mt-10 ml-8">Register now!</h1>
            <form onSubmit={handleSubmit} className="card-body">
              {/* Name */}
              <div className="form-control">
                <label className="block text-gray-700 font-medium mb-2 ">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter your name"
                />
              </div>
              {/* email */}
              <div className="form-control text-gray-700 font-medium mb-2">
                <label className="label ">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              {/*photo url */}
              <div className="">
                <label className="block text-gray-700 font-medium mb-2">
                  Photo URL
                </label>
                <input
                  type="url"
                  name="photoURL"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter your photo URL"
                />
              </div>
              {/* password */}
              <div className="form-control">
                <label className="label text-gray-700 font-medium mb-2">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
