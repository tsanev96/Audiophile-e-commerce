import React from "react";
import { Action, ProductActions } from "../../../actions/productActions";
import { Product } from "../../../types/product";
import { Button } from "../Button/Button";

interface ProductActionButtonsProps {
  dispatch: (value: Action) => void;
  product: Product;
  state: {
    quantity: number;
    price: number;
  };
  onHandleAddToCart: () => void;
  renderAddToCart?: boolean;
}

export const ProductActionButtons: React.FC<ProductActionButtonsProps> = ({
  product,
  state,
  dispatch,
  onHandleAddToCart,
  renderAddToCart = false,
}) => {
  const rootClass = "product-action-buttons";
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
        <Button text="ADD TO CART" onClick={onHandleAddToCart} />
      )}
    </div>
  );
};
