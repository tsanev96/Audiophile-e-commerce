import React, { useReducer } from "react";
import { useEffect } from "react";
import { ProductActions } from "../../../actions/productActions";
import { useCart } from "../../../hooks/cart";
import { Product } from "../../../types/product";
import {
  ProductReducerState,
  productsReducer,
} from "../../../util/productsReducer";
import { ButtonAddToCart } from "../ButtonAddToCart/ButtonAddToCart";

interface ProductActionButtonsProps {
  product: Product;
  renderAddToCart?: boolean;
  quantity?: number;
  onQuantityChange: (quantity: number) => void;
}

export const ProductActionButtons: React.FC<ProductActionButtonsProps> = ({
  product,
  renderAddToCart = false,
  quantity,
  onQuantityChange,
}) => {
  const rootClass = "product-action-buttons";

  const addProductToCart = useCart();

  const initialState: ProductReducerState = {
    quantity: 1,
    total: product.price * 1,
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  console.log("state", state);
  useEffect(() => {
    onQuantityChange(state.quantity);
  }, [state.quantity]);

  const handleRaiseQuantity = () =>
    dispatch({
      type: ProductActions.Increment,
      payload: product.price,
    });

  const handleLowerQuantity = () => {
    dispatch({
      type: ProductActions.Decrement,
      payload: product.price,
    });
  };

  return (
    <div className={rootClass}>
      <div
        className={`quantity-container ${
          renderAddToCart && "quantity-container-margin"
        }`}
      >
        <button className="drop" onClick={handleLowerQuantity}>
          -
        </button>
        <span>{state.quantity}</span>
        <button className="up" onClick={handleRaiseQuantity}>
          +
        </button>
      </div>
      {renderAddToCart && (
        <ButtonAddToCart
          onClick={() => addProductToCart({ ...product, ...state })}
        />
      )}
    </div>
  );
};
