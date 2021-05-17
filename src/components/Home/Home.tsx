import React from "react";
import { StageTeaser } from "../common/StageTeaser/StageTeaser";
import { stageTeaserData } from "./homeData";

export const Home = () => {
  return (
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
  );
};
