import { useEffect, useState } from "react";
import { ProductItem } from "../common/ProductItem/ProductItem";
import { Wrapper } from "../common/Wrapper/Wrapper";
import { stageTeaserData } from "../Home/homeData";
import { CategoriesBoxes } from "../CategoriesBoxes/CategoriesBoxes";
import { TeaserBottom } from "../TeaserBottom/TeaserBottom";
import { SeeProduct } from "../common/SeeProduct/SeeProduct";
import { Product } from "../../types/product";
import { scrollToTop } from "../../util/scrollToTop";
import { useCart } from "../../hooks/cart";
import { CartProduct } from "../../types/cartProduct";
import data from "../../data/data.json";

export const Headphones = () => {
  const addProductToCard = useCart();

  const [currentProductID, setCurrentProductID] = useState<number | null>(null);

  const [products, setProducts] = useState<Product[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Product>(Object);

  useEffect(() => {
    const fetchedData = data.filter((item) => item.category === "headphones");
    setProducts(fetchedData);
  }, []);

  const handleSeeProductClick = (productID: number) => {
    // TODO
    const productIndex = data.findIndex((prod) => prod.id === productID);

    if (productIndex >= 0) {
      setCurrentProductID(productID);
      setCurrentProduct(products[productIndex]);
      scrollToTop();
    }
  };

  const handleGoBack = () => setCurrentProductID(null);

  const handleAddToCart = (product: CartProduct) => addProductToCard(product);

  return (
    <Wrapper className="headphones-page">
      <div className="headphones-products">
        {currentProductID !== null ? (
          <>
            <button className="btn-go-back" onClick={handleGoBack}>
              Go Back
            </button>
            <SeeProduct
              product={currentProduct}
              onAddToCart={handleAddToCart}
            />
          </>
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
