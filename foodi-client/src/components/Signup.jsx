import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Login } from "./Login";
import { Link } from "react-router-dom";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20 rounded-xl border-2">
      <div className="modal-action flex flex-col justify-center mt-0">
        {/* login form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body"
          method="dialog"
        >
          <h3 className="font-bold text-lg capitalize">create new account</h3>

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

          {/* login btn */}
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Signup"
              className="btn bg-green text-xl font-bold"
            />
          </div>

          <p className="text-center my-2">
            Have an account?{" "}
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="text-green ml-1 bg-gray-100 p-1 rounded font-medium"
            >
              Login
            </button>{" "}
          </p>
          <Link
            to="/"
            className="btn btn-md btn-circle btn-ghost absolute right-10 top-8 font-bold text-xl"
          >
            ✕
          </Link>
        </form>

        <div className="text-center space-x-3 mb-5 flex items-center justify-center">
          <p className="text-lg font-medium">Login with Google</p>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaGoogle />
          </button>
        </div>
        <Login />
      </div>
    </div>
  );
};
