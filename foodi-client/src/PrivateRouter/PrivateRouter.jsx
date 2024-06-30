import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "./../context/AuthProvider";
import { LoadingSpinner } from "./../components/LoadingSpinner";

export const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
