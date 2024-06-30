import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/home/Home";
import { Menu } from "../pages/shop/Menu";
import { Signup } from "../components/Signup";
import { UpdateProfile } from "../pages/dashboard/UpdateProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
