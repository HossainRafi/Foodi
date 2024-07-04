import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import "../App.css";
import { Footer } from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { LoadingSpinner } from "../components/LoadingSpinner";
import toast, { Toaster } from "react-hot-toast";

export const MainLayout = () => {
  const { loading } = useContext(AuthContext);

  return (
    <div className="bg-prigmayBG">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <Navbar />
          <div className="min-h-screen">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
      
    </div>
  );
};
