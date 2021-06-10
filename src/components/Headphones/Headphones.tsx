import { useEffect, useState } from "react";
import { Product } from "../../types/product";
import { ProductsPageGrid } from "../common/ProductsPageGrid/ProductsPageGrid";
import { Categories } from "../../types/categories";
import data from "../../data/data.json";

export const Headphones = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchedData = data.filter(
      (product) => product.category === Categories.HEADPHONES
    );
    setProducts(fetchedData);
  }, []);

  return (
    <ProductsPageGrid products={products} className={Categories.HEADPHONES} />
  );
};
