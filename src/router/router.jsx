import {createBrowserRouter} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddPostForm from "../pages/AddPostForm";
import AllLostFound from "../pages/AllPosts/AllLostFound";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allItems",
        element: <AllLostFound></AllLostFound>,
      },
      {
        path: "/addLostAndFoundItem",
        element: (
          <PrivetRoutes>
            <AddPostForm></AddPostForm>
          </PrivetRoutes>
        ),
      },
    ],
  },
]);

export default router;
