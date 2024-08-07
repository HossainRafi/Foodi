/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { Login } from "./Login";
import logo from "/logo.png";
import { AuthContext } from "../contexts/AuthProvider";
import { Profile } from "./Profile";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();

  // scroll effect for navbar
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  // navigation item lists
  const navItems = (
    <>
      <li className="text-lg">
        <a href="/">Home</a>
      </li>
      <li className="text-lg">
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li className="text-lg">
              <a href="/menu">All</a>
            </li>
            <li className="text-lg">
              <a>Salad</a>
            </li>
            <li className="text-lg">
              <a>Pizza</a>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary className="text-lg">Services</summary>
          <ul className="p-2">
            <li className="text-lg">
              <a>Online Order</a>
            </li>
            <li className="text-lg">
              <a>Table Booking</a>
            </li>
            <li className="text-lg">
              <a>Order Tracking</a>
            </li>
          </ul>
        </details>
      </li>
      <li className="text-lg">
        <a>Offers</a>
      </li>
    </>
  );
  return (
    <>
      <header className="max-w-screen-2xl bg-gray-100 container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out">
        <div
          className={`navbar xl:px-24 ${
            isSticky ? "shadow-md transition-all duration-300 ease-in-out" : ""
          }`}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>

            {/* navbar logo */}
            <a href="/">
              <img src={logo} />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="navbar-end">
            {/* search items*/}
            <button className="btn btn-ghost btn-circle hidden lg:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* cart items */}
            <Link to="cart-page">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle hidden lg:flex items-center justify-center mr-3"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge p-1 badge-md indicator-item font-sans text-green">
                    {cart.length || 0}
                  </span>
                </div>
              </div>
            </Link>

            {/* login btn */}
            {user ? (
              <Profile user={user} />
            ) : (
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="btn bg-green rounded-full px-4 text-white flex items-center gap-2 text-lg"
              >
                <FaRegUser /> Login
              </button>
            )}

            {/* login modal component calling */}
            <Login />
          </div>
        </div>
      </header>
    </>
  );
};
