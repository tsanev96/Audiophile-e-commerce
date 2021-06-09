import React, { useContext, useEffect, useState } from "react";
import { ProductItem } from "../common/ProductItem/ProductItem";
import { Wrapper } from "../common/Wrapper/Wrapper";
import { stageTeaserData } from "../Home/homeData";
import data from "../../data/data.json";
import { CategoriesBoxes } from "../CategoriesBoxes/CategoriesBoxes";
import { TeaserBottom } from "../TeaserBottom/TeaserBottom";
import { SeeProduct } from "../common/SeeProduct/SeeProduct";
import { Product } from "../../types/product";
import { scrollToTop } from "../../util/scrollToTop";
import { CartContext } from "../../context/cartContext";
import { CartContextDetails } from "../../types/cartContext";

export const Headphones = () => {
  const [currentProductID, setCurrentProductID] = useState<number | null>(null);

  const [products, setProducts] = useState<Product[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Product>(Object);

  const { cart, setCart } = useContext(CartContext) as CartContextDetails;

  useEffect(() => {
    // TODO
    const fetchedData = data.filter((item) => item.category === "headphones");
    setProducts(fetchedData);
  }, []);

  const handleSeeProductClick = (productID: number) => {
    setCurrentProductID(productID);

    const productIndex = data.findIndex((prod) => prod.id === productID);
    setCurrentProduct(products[productIndex]);
    scrollToTop();
  };

  const handleAddToCart = (product: Product) => {
    setCart([...cart, product]);

    console.log("cart", cart);
  };

  return (
    <Wrapper className="headphones-page">
      <div className="headphones-products">
        {currentProductID !== null ? (
          <SeeProduct product={currentProduct} onAddToCart={handleAddToCart} />
        ) : (
          products?.map((product) => (
            <ProductItem
              id={product.id}
              key={product.id}
              isProductNew={product.new}
              headline={product.name}
              description={product.description}
              button={{ text: "See Product", onClick: handleSeeProductClick }}
              image={{
                mobile: stageTeaserData.image.mobile,
                tablet: stageTeaserData.image.tablet,
                desktop: stageTeaserData.image.desktop,
                alt: stageTeaserData.image.alt,
              }}
            />
          ))
        )}
      </div>

      <CategoriesBoxes />
      <TeaserBottom />
    </Wrapper>
  );
};
