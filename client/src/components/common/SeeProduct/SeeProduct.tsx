import React from "react";
import { Product } from "../../../types/product";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import { Image } from "../Image/Image";
import { Includes } from "./components/Includes";
import { ProductImages } from "./components/ProductImages";
import { Wrapper } from "../Wrapper/Wrapper";
import img from "../../../assets/cart/image-xx99-mark-two-headphones.jpg";
import { ProductActionButtons } from "../ProductActionButtons/ProductActionButtons";

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

  return (
    <Wrapper className={rootClass}>
      <button className="btn-go-back" onClick={onHandleGoBack}>
        Go Back
      </button>
      <Image mobile={img} tablet={img} desktop={img} alt="" />
      <div className="info">
        <Headline text={product.name} level="h3" theme="dark" />
        <Copy text={product.description} theme="dark" />
        <div className="price">$ {product.price}</div>
        <ProductActionButtons
          product={product}
          renderAddToCart
          onQuantityChange={(quanity: number) => {
            console.log("quantity", quanity);
          }}
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
