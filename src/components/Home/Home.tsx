import React from "react";
import { CategoriesBoxes } from "../CategoriesBoxes/CategoriesBoxes";
import { ImageText } from "../common/ImageText/ImageText";
import { PremiumProduct } from "../common/PremiumProduct/PremiumProduct";
import { ProductColumn } from "../common/ProductColumn/ProductColumn";
import { ProductImage } from "../common/ProductImage/ProductImage";
import { StageTeaser } from "../common/StageTeaser/StageTeaser";
import { Wrapper } from "../common/Wrapper/Wrapper";
import { stageTeaserData } from "./homeData";

export const Home = () => {
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
        <ImageText
          image={stageTeaserData.image}
          headline={{
            firstPart: "Bringing you the",
            secondPart: "best",
            thirdPart: "audio gear",
          }}
          description="Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
        />
      </Wrapper>
    </div>
  );
};
