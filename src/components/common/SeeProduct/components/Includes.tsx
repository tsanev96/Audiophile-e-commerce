import React from "react";
import { Product } from "../../../../types/product";

interface IncludesProps {
  product: Product;
}

export const Includes: React.FC<IncludesProps> = ({ product }) => {
  return (
    <ul>
      {product.includes.map((box) => (
        <li key={box.item}>
          <span className="quantity">{box.quantity}x</span>
          {box.item}
        </li>
      ))}
    </ul>
  );
};
