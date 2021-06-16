import React, { useContext } from "react";
import { Action, ProductActions } from "../actions/productActions";
import { CartContext } from "../context/cartContext";
import { CartProduct } from "../types/cartProduct";

export const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  return (product: CartProduct, dispatch: React.Dispatch<Action>) => {
    dispatch({
      type: ProductActions.AddToCart,
      payload: product.price,
    });

    const products = [...cart];
    const findIndexProduct = products.findIndex(
      (prod) => prod.id === product.id
    );

    if (findIndexProduct >= 0) {
      products[findIndexProduct].quantity = product.quantity;
      setCart([...products]);
    } else {
      setCart([...products, product]);
    }
  };
};
