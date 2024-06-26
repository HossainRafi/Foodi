import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import "../App.css"

export const MainLayout = () => {
  return (
    <div>
      <Navbar />

      {/* all content of this website will render under this <Outlet/> component */}
      <Outlet />

      <footer>Footer</footer>
    </div>
  );
};
