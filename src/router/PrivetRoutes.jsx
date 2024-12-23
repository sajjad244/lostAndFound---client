import {useContext} from "react";
import {Navigate, useLocation} from "react-router-dom";
import AuthContext from "../Provider/AuthContext";

// eslint-disable-next-line react/prop-types
const PrivetRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-lg bg-red-600"></span>
      </div>
    );
  }
  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRoutes;
