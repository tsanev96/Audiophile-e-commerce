import { FC } from "react";
import { Button } from "../Button/Button";

interface ButtonAddToCartProps {
  onClick: () => void;
}

export const ButtonAddToCart: FC<ButtonAddToCartProps> = ({ onClick }) => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <Button text="ADD TO CART" onClick={onClick} />
    </div>
  );
};
