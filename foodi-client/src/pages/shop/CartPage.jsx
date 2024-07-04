import toast, { Toaster } from "react-hot-toast";
import { useCart } from "../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

export const CartPage = () => {
  const [cart, refetch] = useCart();
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  // page will load from top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // calculate price
  const calculatePrice = (item) => {
    return item?.price * item?.quantity;
  };

  // item increase button
  const handleIncrease = (item) => {
    // console.log(item._id);
    fetch(`http://localhost:5000/carts/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ quantity: item?.quantity + 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedCart = cartItems.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem?.quantity + 1 };
          }
          return cartItem;
        });
        refetch();
        setCartItems(updatedCart);
      });
    refetch();
  };

  // item decrease button
  const handleDecrease = (item) => {
    // console.log(item._id);
    if (item?.quantity > 1) {
      fetch(`http://localhost:5000/carts/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ quantity: item.quantity - 1 }),
      })
        .then((res) => res.json())
        .then((data) => {
          const updatedCart = cartItems.map((cartItem) => {
            if (cartItem?.id === item?.id) {
              return { ...cartItem, quantity: cartItem?.quantity - 1 };
            }
            return cartItem;
          });
          refetch();
          setCartItems(updatedCart);
        });
      refetch();
    } else {
      toast.error("Item Can't Be 0");
    }
  };

  // calculate total price
  const cartSubTotal = cart.reduce((total, item) => {
    return total + calculatePrice(item);
  }, 0);
  const orderTotal = cartSubTotal;

  // item delete button
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result?.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item?._id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              toast.success("Remove Successfully !");
            }
          });
      }
    });
  };

  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      {/* banner */}
      <div className="pt-32 pb-12 flex flex-col justify-center items-center gap-8">
        <div className="space-y-7 px-4">
          <h2 className="text-4xl md:text-5xl font-bold md:leading-snug leading-snug capitalize">
            items added to the{" "}
            <span className="text-green block text-center">food cart</span>
          </h2>
        </div>
      </div>

      {/* table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table border">
            {/* head */}
            <thead className="bg-green text-white">
              <tr className="text-sm">
                {/* <th className="text-center">#</th> */}
                <th className="text-center">Image</th>
                <th className="text-center">Name</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Price</th>
                <th className="text-center">Remove</th>
              </tr>
            </thead>
            <tbody>
              {/* cart row */}
              {cart.map((item, index) => (
                <tr key={index}>
                  {/* <td className="font-semibold text-center">{index + 1}</td> */}
                  <td className="flex justify-center items-center">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-circle h-12 w-12 md:h-16 md:w-16">
                          <img src={item?.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">{item?.name}</td>
                  {/* quantity increase or decrease */}
                  <td className="text-center">
                    <button
                      onClick={() => handleDecrease(item)}
                      className="btn bg-white btn-sm"
                    >
                      <FaMinus />
                    </button>
                    <input
                      type="number"
                      value={item?.quantity}
                      onChange={() => console.log(item?.quantity)}
                      className="w-10 mx-2 text-center overflow-hidden appearance-none"
                    />
                    <button
                      onClick={() => handleIncrease(item)}
                      className="btn bg-white btn-sm"
                    >
                      <FaPlus />
                    </button>
                  </td>
                  <td className="text-center">
                    $ {calculatePrice(item).toFixed(2)}
                  </td>
                  <th className="text-center">
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn bg-white btn-sm"
                    >
                      <FaTrashAlt className="text-red text-lg" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* customer details */}
      <div className="mt-14 pb-24 flex flex-col md:flex-row justify-between items-start">
        {/* details left */}
        <div className="md:w-1/2 space-y-5">
          <h3 className="font-bold text-2xl">Customer Details</h3>
          <p className="text-xl">
            <span className="font-medium">Name:</span> {user?.displayName}
          </p>
          <p className="text-xl">
            <span className="font-medium">E-mail:</span> {user?.email}
          </p>
          <p className="text-xl">
            <span className="font-medium">User ID:</span> {user?.uid}
          </p>
        </div>
        <div className="md:w-1/2 space-y-5">
          <h3 className="font-bold text-2xl">Shooping Details</h3>
          <p className="text-xl">
            <span className="font-medium">Total Items:</span> {cart?.length}
          </p>
          <p className="text-xl">
            <span className="font-medium">Total Price:</span> ${" "}
            {orderTotal.toFixed(2)}
          </p>
          <button className="btn bg-green text-white text-lg">
            Proceed Checkout
          </button>
        </div>
      </div>

      {/* toaster */}
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
