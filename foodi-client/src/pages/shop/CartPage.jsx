import { useCart } from "../../hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

export const CartPage = () => {
  const [cart, refetch] = useCart();

  // delete button
  const handleDelete=(item)=>{
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!",
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success",
    });
  }
});
  }

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
          <table className="table border mb-20">
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
                          <img src={item.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">{item.name}</td>
                  <td className="text-center">{item.quantity}</td>
                  <td className="text-center">$ {item.price}</td>
                  <th className="text-center">
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn-sm"
                    >
                      <FaTrash className="text-red text-lg" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
