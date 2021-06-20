import React, { useReducer } from "react";
import { useEffect } from "react";
import { ProductActions } from "../../../actions/productActions";
import { CartProduct } from "../../../types/cartProduct";
import { Product } from "../../../types/product";
import {
  ProductReducerState,
  productsReducer,
} from "../../../util/productsReducer";
import { ButtonAddToCart } from "../ButtonAddToCart/ButtonAddToCart";

interface ProductActionButtonsProps {
  product: Product;
  onAddToCart: (product: CartProduct) => void;
}

export const ProductActionButtons: React.FC<ProductActionButtonsProps> = ({
  product,
  onAddToCart,
}) => {
  const rootClass = "product-action-buttons";

  const initialState: ProductReducerState = {
    quantity: 1,
    total: product.price * 1,
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  const handleRaiseQuantity = () =>
    dispatch({
      type: ProductActions.Increment,
      payload: product.price,
    });

  const handleLowerQuantity = () =>
    dispatch({
      type: ProductActions.Decrement,
      payload: product.price,
    });

  return (
    <div className={rootClass}>
      <div className="quantity-container">
        <button className="drop" onClick={handleLowerQuantity}>
          -
        </button>
        <span>{state.quantity}</span>
        <button className="up" onClick={handleRaiseQuantity}>
          +
        </button>
      </div>
      <ButtonAddToCart onClick={() => onAddToCart({ ...product, ...state })} />
    </div>
  );
};
