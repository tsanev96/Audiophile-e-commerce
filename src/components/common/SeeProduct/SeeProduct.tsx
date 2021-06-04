import React, { useState } from "react";
import { Product } from "../../../types/product";
import { Button } from "../Button/Button";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import { Image } from "../Image/Image";
import img from "../../../assets/cart/image-xx99-mark-two-headphones.jpg";

interface SeeProductProps {
  product: Product;
}

export const SeeProduct: React.FC<SeeProductProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="see-product">
      <Image mobile={img} tablet={img} desktop={img} alt="" />
      <Headline text={product.name} level="h3" theme="dark" />
      <Copy text={product.description} theme="dark" />
      <div className="price">$ {product.price}</div>
      <div className="see-product__buttons">
        <div className="quantity-container btn">
          <button className="drop">-</button>
          <span className="quantity">{quantity}</span>
          <button className="up">+</button>
        </div>
        <Button text="ADD TO CART" />
      </div>
    </div>
  );
};
