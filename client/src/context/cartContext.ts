import React from "react";
import { CartContextDetails } from "../types/cartContext";

export const CartContext = React.createContext<CartContextDetails>({
  cart: [],
  setCart: () => {
    throw new Error("Context is not provided");
  },
});
