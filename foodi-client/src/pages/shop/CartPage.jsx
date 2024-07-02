import { useCart } from "../../hooks/useCart";

export const CartPage = () => {
  const [cart, refetch] = useCart();

  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      {/* banner */}
      <div className="pt-32 pb-16 flex flex-col justify-center items-center gap-8">
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
          <table className="table">
            {/* head */}
            <thead className="bg-green text-white">
              <tr className="text-xl">
                {/* <th className="text-center">#</th> */}
                <th className="text-center">Image</th>
                <th className="text-center">Name</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* cart row */}
              {cart.map((item, index) => (
                <tr key={index}>
                  {/* <td className="font-semibold text-center">{index + 1}</td> */}
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-circle h-12 w-12 md:h-20 md:w-20">
                          <img src={item.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold text-center">{item.name}</td>
                  <td className="font-semibold text-center">{item.quantity}</td>
                  <td className="font-semibold text-center">{item.price}</td>
                  <th className="text-center">
                    <button className="btn btn-ghost btn-xs">details</button>
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
