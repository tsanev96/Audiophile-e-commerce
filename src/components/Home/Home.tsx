import React from "react";
import { ProductBox } from "../common/ProductBox/ProductBox";
import { StageTeaser } from "../common/StageTeaser/StageTeaser";
import { Wrapper } from "../common/Wrapper/Wrapper";
import { stageTeaserData } from "./homeData";
import data from "../../data/data.json";
console.log(data[0].gallery.first.mobile);
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
        <div className="boxes">
          <ProductBox
            buttonText="click me"
            onClick={() => {}}
            headline="headphones"
            theme="dark"
            img={data[0].gallery.first.mobile}
          />
        </div>
      </Wrapper>
    </div>
  );
};
