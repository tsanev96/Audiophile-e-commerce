import React, { useReducer } from "react";
import { ProductActions as ProductActionsDetails } from "../../../../actions/productActions";
import { CartProduct } from "../../../../types/cartProduct";
import { Product } from "../../../../types/product";
import {
  ProductReducerState,
  productsReducer,
} from "../../../../util/productsReducer";
import { ButtonAddToCart } from "../../ButtonAddToCart/ButtonAddToCart";
import { ProductActions } from "../../ProductActions/ProductActions";

interface ProductActionButtonsProps {
  product: Product;
  onAddToCart: (product: CartProduct) => void;
}

export const ProductActionButtons: React.FC<ProductActionButtonsProps> = ({
  product,
  onAddToCart,
}) => {
  const initialState: ProductReducerState = {
    quantity: 1,
    total: product.price * 1,
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  const handleRaiseQuantity = () =>
    dispatch({
      type: ProductActionsDetails.Increment,
      payload: product.price,
    });

  const handleLowerQuantity = () =>
    dispatch({
      type: ProductActionsDetails.Decrement,
      payload: product.price,
    });

  return (
    <ProductActions
      onHandleLowerQuantity={handleLowerQuantity}
      onHandleRaiseQuantity={handleRaiseQuantity}
      quantity={state.quantity}
    >
      <ButtonAddToCart onClick={() => onAddToCart({ ...product, ...state })} />
    </ProductActions>
  );
};
