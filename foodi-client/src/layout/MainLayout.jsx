import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import "../App.css";
import { Footer } from "../components/Footer";

export const MainLayout = () => {
  return (
    <div className="bg-primaryBG">
      <Navbar />

      <div className="min-h-screen">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
