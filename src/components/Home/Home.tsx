import React from "react";
import { StageTeaser } from "../common/StageTeaser/StageTeaser";
import img from "../../assets/category-earphones/mobile/image-yx1-earphones.jpg";

export const Home = () => {
  return (
    <StageTeaser
      smallHeadline="NEW PRODUCT"
      headline="XX99 Mark II
  Headphone"
      description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
      button={{ text: "See Product" }}
      image={{
        mobile: img,
        tablet: img,
        desktop: img,
        alt: "",
      }}
    />
  );
};
