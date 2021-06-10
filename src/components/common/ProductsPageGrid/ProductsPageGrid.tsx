import { FC, useState } from "react";
import { useCart } from "../../../hooks/cart";
import { CartProduct } from "../../../types/cartProduct";
import { Product } from "../../../types/product";
import { scrollToTop } from "../../../util/scrollToTop";
import { CategoriesBoxes } from "../../CategoriesBoxes/CategoriesBoxes";
import { stageTeaserData } from "../../Home/homeData";
import { TeaserBottom } from "../../TeaserBottom/TeaserBottom";
import { ProductItem } from "../ProductItem/ProductItem";
import { SeeProduct } from "../SeeProduct/SeeProduct";
import { Wrapper } from "../Wrapper/Wrapper";

interface ProductsPageGridProps {
  products: Product[];
  className?: string;
}

export const ProductsPageGrid: FC<ProductsPageGridProps> = ({
  products,
  className = "",
}) => {
  const addProductToCard = useCart();

  const [currentProductID, setCurrentProductID] = useState<number | null>(null);

  const [currentProduct, setCurrentProduct] = useState<Product>(Object);

  const handleSeeProductClick = (productID: number) => {
    // TODO
    const productIndex = products.findIndex((prod) => prod.id === productID);

    if (productIndex >= 0) {
      setCurrentProductID(productID);
      setCurrentProduct(products[productIndex]);
      scrollToTop();
    }
  };

  const handleGoBack = () => setCurrentProductID(null);

  const handleAddToCart = (product: CartProduct) => addProductToCard(product);

  return (
    <Wrapper className={`${className} page`}>
      <div className="page-products">
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
