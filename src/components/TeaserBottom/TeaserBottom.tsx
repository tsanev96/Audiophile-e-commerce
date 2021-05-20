import React from "react";
import { ImageText } from "../common/ImageText/ImageText";
import { stageTeaserData } from "../Home/homeData";

export const TeaserBottom = () => {
  return (
    <ImageText
      image={stageTeaserData.image}
      headline={{
        firstPart: "Bringing you the",
        secondPart: "best",
        thirdPart: "audio gear",
      }}
      description="Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
    />
  );
};
