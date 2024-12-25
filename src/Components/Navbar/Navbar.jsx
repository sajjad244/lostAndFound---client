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
        <NavLink to="/addLostAndFoundItem">Add Lost & Found Item</NavLink>
      </li>
      <li>
        <NavLink to="/myItems">My Items</NavLink>
      </li>
      <li>
        <NavLink to="/recoveredItems">Recovered Items</NavLink>
      </li>
      {/* <p className="p-2">{user?.displayName}</p> */}
    </>
  );
  return (
    <div className=" ">
      <div className="navbar bg-base-100 flex justify-between">
        {/*  */}
        <div className="flex items-center">
          <div className="text-3xl text-teal-500 font-bold">
            <Link
              to="/"
              className="btn btn-ghost text-xl font-bold flex items-center"
            >
              <p className="bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">
                <span>Where</span>
                <span className="font-normal italic">IsIt</span>
              </p>
            </Link>
          </div>
        </div>
        {/*  */}

        <div>
          <div className="mr-4">
            <ul className="flex justify-center  text-sm font-semibold">
              <li>
                <NavLink
                  to="/"
                  className="btn btn-ghost font-bold bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allItems"
                  className="btn btn-ghost font-bold bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text"
                >
                  All Lost&Found
                </NavLink>
              </li>
            </ul>
          </div>
          {/*  */}
          {user ? (
            <div className="flex gap-4 justify-center items-center ">
              {/*  */}
              <div className="dropdown dropdown-end tooltip-bottom    ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
                  data-tip={user.displayName}
                >
                  <div className="w-10 rounded-full relative group">
                    {user?.email ? (
                      <div>
                        <img
                          src={user?.photoURL}
                          alt="User"
                          className="rounded-full"
                        />
                      </div>
                    ) : (
                      <FaUser className="text-2xl cursor-pointer" />
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm font-semibold dropdown-content bg-base-100 rounded-box z-[20] mt-3 w-40 p-2 shadow space-y-2"
                >
                  {links}
                </ul>
              </div>

              {/*  */}
              {/*  */}
              {/*  */}
              <div>
                <Link
                  onClick={logout}
                  className="btn font-bold bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text"
                >
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex gap-4 justify-center items-center">
              <Link
                to="/login"
                className="btn font-bold bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn font-bold bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text"
              >
                Register
              </Link>
            </div>
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
