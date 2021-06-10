import React, { useReducer } from "react";
import { Product } from "../../../types/product";
import { Button } from "../Button/Button";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import { Image } from "../Image/Image";
import img from "../../../assets/cart/image-xx99-mark-two-headphones.jpg";
import { CartProduct } from "../../../types/cartProduct";

interface SeeProductProps {
  product: Product;
  onAddToCart: (product: CartProduct) => void;
}

enum ProductActions {
  Increment,
  Decrement,
  AddToCart,
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
    case ProductActions.AddToCart:
      return state;
  }
};

export const SeeProduct: React.FC<SeeProductProps> = ({
  product,
  onAddToCart,
}) => {
  const initialState = { quantity: 1, price: product.price };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddToCart = () => {
    dispatch({
      type: ProductActions.AddToCart,
      payload: product.price,
    });

    onAddToCart({ ...product, quantity: state.quantity });
  };

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
        <Button text="ADD TO CART" onClick={handleAddToCart} />
      </div>
    </div>
  );
};
