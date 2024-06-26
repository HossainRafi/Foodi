import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div>
      <nav>Navbar</nav>

      {/* all content of this website will render under this <Outlet/> component */}
      <Outlet />

      <footer>Footer</footer>
    </div>
  );
};
