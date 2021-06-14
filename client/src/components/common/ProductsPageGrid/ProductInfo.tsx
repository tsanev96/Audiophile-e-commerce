import { FC } from "react";
import { Product } from "../../../types/product";
import { SeeProduct } from "../SeeProduct/SeeProduct";

interface ProductInfoProps {
  onHandleGoBack?: () => void;
  product: Product;
}

export const ProductInfo: FC<ProductInfoProps> = ({
  onHandleGoBack,
  product,
}) => {
  return (
    <>
      <button className="btn-go-back" onClick={onHandleGoBack}>
        Go Back
      </button>
      <SeeProduct product={product} />
    </>
  );
};
