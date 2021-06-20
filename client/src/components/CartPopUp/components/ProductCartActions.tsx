import React, { useReducer } from "react";
import { useEffect } from "react";
import { ProductActions as ProductActionsProps } from "../../../actions/productActions";
import { CartProduct } from "../../../types/cartProduct";
import { Product } from "../../../types/product";
import {
  ProductReducerState,
  productsReducer,
} from "../../../util/productsReducer";
import { ProductActions } from "../../common/ProductActions/ProductActions";

interface ProductCartActionsProps {
  product: CartProduct;
  onCartChange: (product: CartProduct) => void;
}

export const ProductCartActions: React.FC<ProductCartActionsProps> = ({
  product,
  onCartChange,
}) => {
  const initialState: ProductReducerState = {
    quantity: product.quantity,
    total: product.price * product.quantity,
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  useEffect(() => {
    onCartChange({ ...product, ...state });
  }, [state]);

  const handleRaiseQuantity = () =>
    dispatch({
      type: ProductActionsProps.Increment,
      payload: product.price,
    });

  const handleLowerQuantity = () =>
    dispatch({
      type: ProductActionsProps.Decrement,
      payload: product.price,
    });

  return (
    <ProductActions
      onHandleRaiseQuantity={handleRaiseQuantity}
      onHandleLowerQuantity={handleLowerQuantity}
      quantity={state.quantity}
    />
  );
};
