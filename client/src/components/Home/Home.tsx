import { CategoriesBoxes } from "../CategoriesBoxes/CategoriesBoxes";
import { PremiumProduct } from "../common/PremiumProduct/PremiumProduct";
import { ProductColumn } from "../common/ProductColumn/ProductColumn";
import { ProductImage } from "../common/ProductImage/ProductImage";
import { StageTeaser } from "../common/StageTeaser/StageTeaser";
import { Wrapper } from "../common/Wrapper/Wrapper";
import { TeaserBottom } from "../TeaserBottom/TeaserBottom";
import { stageTeaserData } from "./homeData";

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      <StageTeaser
        smallHeadline={stageTeaserData.smallHeadline}
        headline={stageTeaserData.headline}
        description={stageTeaserData.description}
        button={{ text: "See Product" }}
        image={{
          mobile: stageTeaserData.image.mobile,
          tablet: stageTeaserData.image.tablet,
          desktop: stageTeaserData.image.desktop,
          alt: stageTeaserData.image.alt,
        }}
        theme="light"
      />
      <Wrapper>
        <CategoriesBoxes />
        <PremiumProduct
          headline="ZX9 SPEAKER"
          description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
          button={{ text: "SEE PRODUCT" }}
        />
        <ProductImage
          headline="ZX7 SPEAKER"
          button={{ onClick: () => {} }}
          image={stageTeaserData.image}
        />
        <ProductColumn
          headline="ZX7 SPEAKER"
          button={{ onClick: () => {} }}
          image={stageTeaserData.image}
        />
        <TeaserBottom />
      </Wrapper>
    </div>
  );
};
