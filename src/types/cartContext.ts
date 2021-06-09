import { Product } from "./product";

export type CartContextDetails = {
  cart: [];
  setCart: (product: Product[]) => void;
};
