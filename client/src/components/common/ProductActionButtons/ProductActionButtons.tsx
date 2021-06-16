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
}

export const ProductActionButtons: React.FC<ProductActionButtonsProps> = ({
  product,
  renderAddToCart = false,
}) => {
  const rootClass = "product-action-buttons";

  const addProductToCart = useCart();

  const initialState: ProductReducerState = {
    quantity: 1,
    price: product.price,
  };
  const [state, dispatch] = useReducer(productsReducer, initialState);

  return (
    <div className={rootClass}>
      <div className="quantity-container btn">
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
