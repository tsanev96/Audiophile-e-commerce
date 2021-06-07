import React, { useReducer } from "react";
import { Product } from "../../../types/product";
import { Button } from "../Button/Button";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import { Image } from "../Image/Image";
import img from "../../../assets/cart/image-xx99-mark-two-headphones.jpg";

interface SeeProductProps {
  product: Product;
}

enum ProductActions {
  Increment,
  Decrement,
}

type Action = {
  type: ProductActions;
  payload: number;
};

type State = {
  quantity: number;
  price: number;
};

const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  const { quantity } = state;

  switch (type) {
    case ProductActions.Increment:
      const incrementedQuantity = quantity + 1;
      return {
        ...state,
        quantity: incrementedQuantity,
        price: payload * incrementedQuantity,
      };

    case ProductActions.Decrement:
      const decrementedQuantity = quantity === 1 ? quantity : quantity - 1;
      return {
        ...state,
        quantity: decrementedQuantity,
        price: payload * decrementedQuantity,
      };
  }
};

export const SeeProduct: React.FC<SeeProductProps> = ({ product }) => {
  const initialState = { quantity: 1, price: product.price };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="see-product">
      <Image mobile={img} tablet={img} desktop={img} alt="" />
      <Headline text={product.name} level="h3" theme="dark" />
      <Copy text={product.description} theme="dark" />
      <div className="price">$ {state.price}</div>
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
        <Button text="ADD TO CART" />
      </div>
    </div>
  );
};
