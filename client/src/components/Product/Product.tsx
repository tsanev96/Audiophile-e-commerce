import { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../../hooks/cart";
import { useFetch } from "../../hooks/fetch";
import { Product as ProductType } from "../../types/product";
import { ProductInfo } from "../common/ProductsPageGrid/ProductInfo";
import { SeeProduct } from "../common/SeeProduct/SeeProduct";

export const Product: FC = () => {
  // const addProductToCart = useCart();

  const [currentProduct, setCurrentProduct] =
    useState<ProductType | null>(null);

  const location = useLocation();
  const res = useFetch<ProductType>(`${location.pathname}`);

  useEffect(() => {
    if (res.response) {
      setCurrentProduct(res.response.data);
    }
  });

  return <>{currentProduct && <SeeProduct product={currentProduct} />}</>;
};
