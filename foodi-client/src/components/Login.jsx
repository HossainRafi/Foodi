/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Toaster, toast } from 'react-hot-toast';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUpWithGmail, login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  // redirecting to home page or specific page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // email password login
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(email, password)
    login(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successful !");
        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage("Provide a correct email and password!");
      });
  };

  // google login
  const handleLogin = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        // console.log(user)
        toast.success("Login Successful !");
        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action flex flex-col justify-center mt-0">
            {/* login form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body"
              method="dialog"
            >
              <h3 className="font-bold text-lg capitalize">
                Login Your Account
              </h3>

              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email")}
                />
              </div>

              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password")}
                />
                <label className="label mt-1">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* error text */}
              {errorMessage ? (
                <p className="text-red text-xs italic">{errorMessage}</p>
              ) : (
                ""
              )}

              {/* login btn */}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn bg-green text-xl font-bold"
                />
              </div>

              <p className="text-center my-2">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-green ml-1 bg-gray-100 p-1 rounded font-medium"
                >
                  Signup
                </Link>{" "}
              </p>

              <button
                htmlFor="my_modal_5"
                onClick={() => document.getElementById("my_modal_5").close()}
                className="btn btn-md btn-circle btn-ghost absolute right-3 top-3 font-bold text-xl"
              >
                ✕
              </button>
            </form>

            <div className="text-center space-x-3 mb-5 flex items-center justify-center">
              <p className="text-lg font-medium">Login with Google</p>
              <button
                className="btn btn-circle hover:bg-green hover:text-white"
                onClick={handleLogin}
              >
                <FaGoogle />
              </button>
            </div>
          </div>
        </div>
      </dialog>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            margin: "70px",
          },
        }}
      />
    </div>
  );
};
