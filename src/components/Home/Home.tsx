import React from "react";
import { ProductBox } from "../common/ProductBox/ProductBox";
import { StageTeaser } from "../common/StageTeaser/StageTeaser";
import { Wrapper } from "../common/Wrapper/Wrapper";
import { boxesData, stageTeaserData } from "./homeData";

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
      <Wrapper className="boxes">
        {boxesData.map((box) => (
          <ProductBox
            key={box.linkTo}
            buttonText="SHOP"
            headline={box.headline}
            theme="dark"
            linkTo={box.linkTo}
          />
        ))}
      </Wrapper>
    </div>
  );
};
