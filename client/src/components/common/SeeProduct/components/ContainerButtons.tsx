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

/*

  &__buttons {
        margin-bottom: rem(60);
        display: flex;

        .quantity-container {
          @include flexCenter;
          margin-right: rem(20);
          background: $light-gray-color;
          text-align: center;

          & > * {
            min-width: rem(15);
          }

          .quantity {
            margin: 0 rem(5);
          }
          .drop,
          .up {
            cursor: pointer;
            transition: 0.4s;
            &:hover {
              background: $dark-gray-color;
            }
          }
        }
      }
      
*/
