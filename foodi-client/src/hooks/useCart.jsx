import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "./../contexts/AuthProvider";

export const useCart = () => {
  const { user } = useContext(AuthContext);

  // fetching cart data using TanstackQuery
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [cart, refetch];
};
