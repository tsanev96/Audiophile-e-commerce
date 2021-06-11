import { FC } from "react";
import { CartProduct } from "../../../types/cartProduct";
import { Product } from "../../../types/product";
import { SeeProduct } from "../SeeProduct/SeeProduct";

interface ProductInfoProps {
  onHandleGoBack: () => void;
  onHandleAddToCart: (product: CartProduct) => void;
  currentProduct: Product;
}

export const ProductInfo: FC<ProductInfoProps> = ({
  onHandleAddToCart,
  onHandleGoBack,
  currentProduct,
}) => {
  return (
    <>
      <button className="btn-go-back" onClick={onHandleGoBack}>
        Go Back
      </button>
      <SeeProduct product={currentProduct} onAddToCart={onHandleAddToCart} />
    </>
  );
};
