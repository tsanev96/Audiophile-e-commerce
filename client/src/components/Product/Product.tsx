import { FC } from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/fetch";
import { Product as ProductType } from "../../types/product";
import { SeeProduct } from "../common/SeeProduct/SeeProduct";

export const Product: FC = () => {
  const location = useLocation();
  const res = useFetch<ProductType>(`${location.pathname}`);

  return (
    <>{res.response?.data && <SeeProduct product={res.response.data} />}</>
  );
};
