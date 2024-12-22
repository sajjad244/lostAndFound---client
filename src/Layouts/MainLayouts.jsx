import {Outlet} from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayouts = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <div className="min-h-screen p-6">
        <Outlet></Outlet>
      </div>
      {/* ___ */}
    </div>
  );
};

export default MainLayouts;
