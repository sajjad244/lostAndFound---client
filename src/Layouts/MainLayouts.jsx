import {Outlet} from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import {Toaster} from "react-hot-toast";

const MainLayouts = () => {
  return (
    <div>
      <Toaster />
      {/* Navbar */}

      <div className="sticky top-0 z-50  ">
        <Navbar />
      </div>
      {/* Main Content */}
      <div className="min-h-screen p-6">
        <Outlet></Outlet>
      </div>
      {/* ___ */}
    </div>
  );
};

export default MainLayouts;
