import { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./../contexts/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useCart } from "../hooks/useCart";

export const Cards = ({ item }) => {
  const [isHeartFillted, setIsHeartFillted] = useState(false);
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  const handleAddCart = async (item) => {
    const { _id, name, image, price, recipe } = item;
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        quantity: 1,
        image,
        price,
        email: user?.email,
      };
      await fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "test data");
          if (data?.menuItemId) {
            toast.success("Item added auccessfully !");
            refetch();
          } else {
            toast.error(data?.message || "Item already exists");
          }
        });
    } else {
      Swal.fire({
        title: "Please login first !",
        text: "Can't add food item without login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signup", { state: { from: location } });
        }
      });
    }
  };

  // favourite item
  const handleHeartClick = () => {
    setIsHeartFillted(!isHeartFillted);
  };

  return (
    <div className="card bg-base-100 shadow-xl relative border">
      <div
        className={`rating gap-1 absolute right-0 top-0 p-4 heartStar bg-green ${
          isHeartFillted ? "text-rose-500" : "text-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="h-5 w-5 cursor-pointer" />
      </div>
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={item?.image}
            className="hover:scale-105 transition-all duration-300 md:h-72"
          />
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/menu/${item._id}`}>
          <h2 className="card-title">{item.name}</h2>
        </Link>
        <p>description of the item</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="sm:text-xl md:text-2xl font-semibold">
            <span className="text-md text-red">$ </span>
            {item.price}
          </h5>
          <button
            onClick={() => handleAddCart(item)}
            className="btn bg-green text-white"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
        }}
      />
    </div>
  );
};
