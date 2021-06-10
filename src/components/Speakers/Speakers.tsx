import React, { useEffect, useState } from "react";
import { ProductsPageGrid } from "../common/ProductsPageGrid/ProductsPageGrid";
import data from "../../data/data.json";
import { Product } from "../../types/product";

export const Speakers: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchedData = data.filter(
      (product) => product.category === "speakers"
    );

    setProducts(fetchedData);
  }, []);

  return <ProductsPageGrid products={products} className="speakers" />;
};
