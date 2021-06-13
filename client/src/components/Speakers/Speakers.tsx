import React, { useState } from "react";
import { ProductsPageGrid } from "../common/ProductsPageGrid/ProductsPageGrid";
import { Product } from "../../types/product";
import { Categories } from "../../types/categories";
import { useFetch } from "../../hooks/fetch";
import { URLs } from "../../networking/url";

export const Speakers: React.FC = () => {
  const res = useFetch<Product[]>(URLs.SPEAKERS);

  const [products, setProducts] = useState<Product[]>([]);

  if (res.response) {
    setProducts(res.response.data);
  }

  return (
    <ProductsPageGrid products={products} className={Categories.SPEAKERS} />
  );
};
