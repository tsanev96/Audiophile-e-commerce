import React, { useReducer } from "react";
import { Product } from "../../../types/product";
import { Button } from "../Button/Button";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import { Image } from "../Image/Image";
import img from "../../../assets/cart/image-xx99-mark-two-headphones.jpg";
import { CartProduct } from "../../../types/cartProduct";
import { productsReducer } from "../../../util/productsReducer";
import { ProductActions } from "../../../actions/productActions";

interface SeeProductProps {
  product: Product;
  onAddToCart: (product: CartProduct) => void;
}

export const SeeProduct: React.FC<SeeProductProps> = ({
  product,
  onAddToCart,
}) => {
  const initialState = { quantity: 1, price: product.price };
  const [state, dispatch] = useReducer(productsReducer, initialState);

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
