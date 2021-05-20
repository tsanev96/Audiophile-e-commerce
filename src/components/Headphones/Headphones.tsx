import React, { useEffect, useState } from "react";
import { ProductItem } from "../common/ProductItem/ProductItem";
import { Wrapper } from "../common/Wrapper/Wrapper";
import { stageTeaserData } from "../Home/homeData";
import data from "../../data/data.json";
import { CategoriesBoxes } from "../CategoriesBoxes/CategoriesBoxes";
import { TeaserBottom } from "../TeaserBottom/TeaserBottom";

interface Product {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  description: string;
  includes: { quantity: number; item: string }[];
  new: boolean;
  price: number;
}

export const Headphones = () => {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    // TODO
    const fetchedData = data.filter((item) => item.category === "headphones");
    setProducts(fetchedData);
  }, []);

  console.log(products);

  return (
    <Wrapper className="headphones-page">
      <div className="headphones-products">
        {products?.map((product) => (
          <ProductItem
            key={product.id}
            isProductNew={product.new}
            headline={product.name}
            description={product.description}
            button={{ text: "See Product", onClick: () => {} }}
            image={{
              mobile: stageTeaserData.image.mobile,
              tablet: stageTeaserData.image.tablet,
              desktop: stageTeaserData.image.desktop,
              alt: stageTeaserData.image.alt,
            }}
          />
        ))}
      </div>
      <CategoriesBoxes />
      <TeaserBottom />
    </Wrapper>
  );
};
