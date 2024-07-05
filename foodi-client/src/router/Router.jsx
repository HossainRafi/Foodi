import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/home/Home";
import { Menu } from "../pages/shop/Menu";
import { Signup } from "../components/Signup";
import { UpdateProfile } from "../pages/dashboard/UpdateProfile";
import { CartPage } from "../pages/shop/CartPage";
import { Login } from "../components/Login";
import { DashboardLayout } from "../layout/DashboardLayout";
import { Dashboard } from "../pages/dashboard/admin/Dashboard";
import { Users } from "../pages/dashboard/admin/Users";

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
        path: "/cart-page",
        element: <CartPage />,
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
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);
