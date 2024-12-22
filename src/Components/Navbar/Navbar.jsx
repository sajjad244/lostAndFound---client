import {useContext, useEffect, useState} from "react";
import {FaMoon, FaSun} from "react-icons/fa";
import {Link, NavLink} from "react-router-dom";
import AuthContext from "../../Provider/AuthContext";

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
      <li>
        <Link onClick={logout}>Logout</Link>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">register</NavLink>
      </li>
    </>
  );
  return (
    <div className=" ">
      <div className="navbar bg-base-100 flex justify-between">
        <div className="flex">
          <i>
            <Link to="/" className="btn btn-ghost text-xl font-bold">
              WhereIsIt<span className="font-normal"></span>
            </Link>
          </i>
        </div>
        <div className="">
          <ul className="flex justify-center gap-4 text-sm font-semibold">
            <li>home</li>
            <li>home</li>
            <li>{user?.email}</li>
          </ul>
        </div>
        <div className="">
          {/*  */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm font-semibold dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow space-y-2"
            >
              {links}
            </ul>
          </div>
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
