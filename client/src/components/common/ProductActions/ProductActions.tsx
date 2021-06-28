import { FC } from "react";

interface ProductActionsProps {
  onHandleLowerQuantity: () => void;
  onHandleRaiseQuantity: () => void;
  quantity?: number;
}

export const ProductActions: FC<ProductActionsProps> = ({
  onHandleLowerQuantity,
  onHandleRaiseQuantity,
  quantity = 1,
  children,
}) => {
  return (
    <div className="product-actions">
      <div className="quantity-container">
        <button className="drop" onClick={onHandleLowerQuantity}>
          -
        </button>
        <span>{quantity}</span>
        <button className="up" onClick={onHandleRaiseQuantity}>
          +
        </button>
      </div>
      {children}
    </div>
  );
};
