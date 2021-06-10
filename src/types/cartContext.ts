import { CartProduct } from "./cartProduct";

export type CartContextDetails = {
  cart: CartProduct[];
  setCart: (product: CartProduct[]) => void;
};
