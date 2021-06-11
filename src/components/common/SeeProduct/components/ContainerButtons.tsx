import React from "react";
import { Action, ProductActions } from "../../../../actions/productActions";
import { Product } from "../../../../types/product";
import { Button } from "../../Button/Button";

interface ContainerButtonsProps {
  dispatch: (value: Action) => void;
  product: Product;
  state: {
    quantity: number;
    price: number;
  };
  onHandleAddToCart: () => void;
}

export const ContainerButtons: React.FC<ContainerButtonsProps> = ({
  product,
  state,
  dispatch,
  onHandleAddToCart,
}) => {
  return (
    <div className="see-product__buttons">
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
      <Button text="ADD TO CART" onClick={onHandleAddToCart} />
    </div>
  );
};
