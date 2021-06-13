import { useState } from "react";
import { Product } from "../../types/product";
import { ProductsPageGrid } from "../common/ProductsPageGrid/ProductsPageGrid";
import { Categories } from "../../types/categories";
import { useFetch } from "../../hooks/fetch";
import { URLs } from "../../networking/url";

export const Earphones: React.FC = () => {
  const res = useFetch<Product[]>(URLs.HEADPHONES);

  const [products, setProducts] = useState<Product[]>([]);

  if (res.response) {
    setProducts(res.response.data);
  }

  return (
    <ProductsPageGrid products={products} className={Categories.HEADPHONES} />
  );
};
