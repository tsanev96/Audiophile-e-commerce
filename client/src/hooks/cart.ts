import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { CartProduct } from "../types/cartProduct";

export const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  return (product: CartProduct) => {
    const products = [...cart];
    const findIndexProduct = products.findIndex(
      (prod) => prod.id === product.id
    );

    if (findIndexProduct >= 0) {
      products[findIndexProduct].quantity = product.quantity;
      products[findIndexProduct].total = product.total;
      setCart([...products]);
    } else {
      setCart([...products, product]);
    }
  };
};
