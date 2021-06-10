import React, { useEffect, useState } from "react";
import { ProductsPageGrid } from "../common/ProductsPageGrid/ProductsPageGrid";
import { Product } from "../../types/product";
import { Categories } from "../../types/categories";
import data from "../../data/data.json";

export const Speakers: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchedData = data.filter(
      (product) => product.category === Categories.SPEAKERS
    );

    setProducts(fetchedData);
  }, []);

  return (
    <ProductsPageGrid products={products} className={Categories.SPEAKERS} />
  );
};
