import React, { useReducer } from "react";
import { useEffect } from "react";
import { ProductActions } from "../../../actions/productActions";
import { CartProduct } from "../../../types/cartProduct";
import { Product } from "../../../types/product";
import {
  ProductReducerState,
  productsReducer,
} from "../../../util/productsReducer";

interface ProductCartActionsProps {
  product: Product;
  onCartChange?: (product: CartProduct) => void;
}

export const ProductCartActions: React.FC<ProductCartActionsProps> = ({
  product,
  onCartChange,
}) => {
  const rootClass = "product-action-buttons";

  const initialState: ProductReducerState = {
    quantity: 1,
    total: product.price * 1,
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  useEffect(() => {
    if (onCartChange) {
      onCartChange({ ...product, ...state });
    }
  }, [state]);

  const handleRaiseQuantity = () =>
    dispatch({
      type: ProductActions.Increment,
      payload: product.price,
    });

  const handleLowerQuantity = () =>
    dispatch({
      type: ProductActions.Decrement,
      payload: product.price,
    });

  return (
    <div className={rootClass}>
      <div className="quantity-container">
        <button className="drop" onClick={handleLowerQuantity}>
          -
        </button>
        <span>{state.quantity}</span>
        <button className="up" onClick={handleRaiseQuantity}>
          +
        </button>
      </div>
    </div>
  );
};
