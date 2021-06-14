import { FC } from "react";
import { Category } from "../../../types/categories";
import { Product } from "../../../types/product";
import { CategoriesBoxes } from "../../CategoriesBoxes/CategoriesBoxes";
import { stageTeaserData } from "../../Home/homeData";
import { TeaserBottom } from "../../TeaserBottom/TeaserBottom";
import { ProductItem } from "../ProductItem/ProductItem";
import { Wrapper } from "../Wrapper/Wrapper";

interface ProductsPageGridProps {
  products: Product[];
  category: Category;
  className?: string;
}

export const ProductsPageGrid: FC<ProductsPageGridProps> = ({
  products,
  category,
  className = "",
}) => {
  return (
    <Wrapper className={`products-page-grid ${className} page`}>
      <div className="products">
        {products?.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            isProductNew={product.new}
            headline={product.name}
            description={product.description}
            button={{ text: "See Product" }}
            image={{
              mobile: stageTeaserData.image.mobile,
              tablet: stageTeaserData.image.tablet,
              desktop: stageTeaserData.image.desktop,
              alt: stageTeaserData.image.alt,
            }}
            category={category}
          />
        ))}
      </div>
      <CategoriesBoxes />
      <TeaserBottom />
    </Wrapper>
  );
};
