import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { CartProduct } from "../types/cartProduct";

export const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  return (newProduct: CartProduct) => {
    const products = [...cart];
    const findIndexProduct = products.findIndex(
      (prod) => prod.id === newProduct.id
    );

    if (findIndexProduct >= 0) {
      products[findIndexProduct].quantity = newProduct.quantity;
      setCart([...products]);
    } else {
      setCart([...products, newProduct]);
    }
  };
};
