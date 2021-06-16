import React, { useReducer } from "react";
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
}

export const ProductActionButtons: React.FC<ProductActionButtonsProps> = ({
  product,
  renderAddToCart = false,
  quantity,
}) => {
  const rootClass = "product-action-buttons";

  const addProductToCart = useCart();

  const currentQuantity = quantity ? quantity : 1;
  const initialState: ProductReducerState = {
    quantity: currentQuantity,
    total: product.price * currentQuantity,
  };

  console.log("current quantity", currentQuantity);

  const [state, dispatch] = useReducer(productsReducer, initialState);

  return (
    <div className={rootClass}>
      <div
        className={`quantity-container ${
          renderAddToCart && "quantity-container-margin"
        }`}
      >
        <button
          className="drop"
          onClick={() =>
            dispatch({
              type: ProductActions.Decrement,
              payload: product.price,
            })
          }
        >
          -
        </button>
        <span>{state.quantity}</span>
        <button
          className="up"
          onClick={() =>
            dispatch({
              type: ProductActions.Increment,
              payload: product.price,
            })
          }
        >
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
