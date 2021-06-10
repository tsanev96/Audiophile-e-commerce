import React, { useEffect, useState } from "react";
import { Product } from "../../types/product";
import data from "../../data/data.json";
import { ProductsPageGrid } from "../common/ProductsPageGrid/ProductsPageGrid";

export const Headphones = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchedData = data.filter(
      (product) => product.category === "headphones"
    );
    setProducts(fetchedData);
  }, []);

  return <ProductsPageGrid products={products} className="headphones" />;
};
