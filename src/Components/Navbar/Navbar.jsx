import {useContext, useEffect, useState} from "react";
import {FaMoon, FaSun} from "react-icons/fa";
import {Link, NavLink} from "react-router-dom";
import AuthContext from "../../Provider/AuthContext";
import {FaUser} from "react-icons/fa6";

const Navbar = () => {
  const {user, logout} = useContext(AuthContext);
  //! State to manage the theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // Change theme when the button is clicked
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  //! State to manage the theme
  const links = (
    <>
      {/* privet-routes */}
      <li>
        <NavLink to="/">Add Lost & Found Item</NavLink>
      </li>
      <li>
        <NavLink to="/">All Recovered Items</NavLink>
      </li>
      <li>
        <NavLink to="/">Manage My Items</NavLink>
      </li>
      <button>{user?.displayName}</button>
    </>
  );
  return (
    <div className=" ">
      <div className="navbar bg-base-100 flex justify-between">
        {/*  */}
        <div className="flex items-center">
          <i className="text-3xl text-teal-500 font-bold">
            <Link
              to="/"
              className="btn btn-ghost text-xl font-bold flex items-center"
            >
              <span className="bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">
                WhereIsIt
              </span>
            </Link>
          </i>
        </div>
        {/*  */}
        <div className="">
          <ul className="flex justify-center  text-sm font-semibold">
            <li>
              <NavLink to="/" className="btn btn-ghost">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="btn btn-ghost">
                Lost&Found
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="">
          {/*  */}
          {user ? (
            <div className="flex gap-4 justify-center items-center">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full relative group">
                    {user?.email ? (
                      <div>
                        <img
                          src={user?.photoURL}
                          alt="User"
                          className="rounded-full"
                        />
                        <span
                          className="absolute left-1/2 transform -translate-x-1/2  bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                          style={{visibility: "visible", display: "block"}}
                        >
                          {user?.displayName || "User Name"}
                        </span>
                      </div>
                    ) : (
                      <FaUser className="text-2xl cursor-pointer" />
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm font-semibold dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow space-y-2"
                >
                  {links}
                </ul>
              </div>
              <div>
                <Link onClick={logout} className="btn btn-ghost font-bold">
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            <Link to="/login" className="btn btn-ghost font-bold">
              Login
            </Link>
          )}
          {/* Theme toggle icon */}
          <button onClick={toggleTheme} className="btn btn-ghost text-lg ml-4">
            {theme === "light" ? <FaMoon /> : <FaSun />}
            {/* Change icon based on theme */}
          </button>
          {/* Theme toggle icon */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
