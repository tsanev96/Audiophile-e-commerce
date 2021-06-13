import { useState } from "react";
import { Product } from "../../types/product";
import { ProductsPageGrid } from "../common/ProductsPageGrid/ProductsPageGrid";
import { Categories } from "../../types/categories";
import { useFetch } from "../../hooks/fetch";
import { URLs } from "../../networking/url";
import { useEffect } from "react";

export const Headphones = () => {
  const res = useFetch<Product[]>(URLs.HEADPHONES);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (res.response) {
      setProducts(res.response.data);
    }
  }, [res.response]);

  return (
    <ProductsPageGrid products={products} className={Categories.HEADPHONES} />
  );
};
