import "./index.css";
import ReactDOM from "react-dom/client";
import { router } from "./router/Router.jsx";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
