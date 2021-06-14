import React, { useReducer } from "react";
import { Product } from "../../../types/product";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import { Image } from "../Image/Image";
import img from "../../../assets/cart/image-xx99-mark-two-headphones.jpg";
import { CartProduct } from "../../../types/cartProduct";
import { productsReducer } from "../../../util/productsReducer";
import { ProductActions } from "../../../actions/productActions";
import { Includes } from "./components/Includes";
import { ContainerButtons } from "./components/ContainerButtons";
import { ProductImages } from "./components/ProductImages";
import { useCart } from "../../../hooks/cart";
import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { Wrapper } from "../Wrapper/Wrapper";

interface SeeProductProps {
  product: Product;
  onHandleAddToCart?: () => void;
  onHandleGoBack?: () => void;
}

export const SeeProduct: React.FC<SeeProductProps> = ({
  product,
  onHandleGoBack,
}) => {
  const rootClass = "see-product";

  const cart = useContext(CartContext);
  const addProductToCart = useCart();
  const initialState = { quantity: 1, price: product.price };
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const handleAddToCart = () => {
    dispatch({
      type: ProductActions.AddToCart,
      payload: product.price,
    });

    addProductToCart({ ...product, quantity: state.quantity });
  };

  return (
    <Wrapper className={rootClass}>
      <button className="btn-go-back" onClick={onHandleGoBack}>
        Go Back
      </button>
      <Image mobile={img} tablet={img} desktop={img} alt="" />
      <div className="info">
        <Headline text={product.name} level="h3" theme="dark" />
        <Copy text={product.description} theme="dark" />
        <div className="price">$ {state.price}</div>
        <ContainerButtons
          product={product}
          state={state}
          dispatch={dispatch}
          onHandleAddToCart={handleAddToCart}
        />

        <div className={`${rootClass}__features`}>
          <Headline level="h4" text="FEATURES" theme="dark" />
          <Copy text={product.features} theme="dark" opacity="big" size="lg" />
        </div>
        <div className={`${rootClass}__in-the-box`}>
          <Headline level="h4" text="IN THE BOX" theme="dark" />
          <Includes product={product} />
          <ProductImages />
        </div>
      </div>
    </Wrapper>
  );
};
