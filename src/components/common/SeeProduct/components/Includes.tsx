import React from "react";
import { Product } from "../../../../types/product";
import { Copy } from "../../Copy/Copy";

interface IncludesProps {
  product: Product;
}

export const Includes: React.FC<IncludesProps> = ({ product }) => {
  return (
    <ul className="see-product__includes">
      {product.includes.map((box) => (
        <li key={box.item}>
          <Copy text={box.item} opacity="big" size="lg" theme="dark">
            <span className="quantity">{box.quantity}x</span>
          </Copy>
        </li>
      ))}
    </ul>
  );
};
