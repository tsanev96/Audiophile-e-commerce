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
import { Includes } from "./components/Includes";
import { ContainerButtons } from "./components/ContainerButtons";

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
      <ContainerButtons
        product={product}
        state={state}
        dispatch={dispatch}
        onHandleAddToCart={handleAddToCart}
      />
      <Headline level="h4" text="FEATURES" theme="dark" />
      <Copy text={product.features} theme="dark" opacity="small" size="lg" />
      <Headline level="h4" text="IN THE BOX" theme="dark" />
      <Includes product={product} />
    </div>
  );
};
