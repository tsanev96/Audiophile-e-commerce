import React from "react";
import { Image } from "../../Image/Image";
import img from "../../../../assets/home/mobile/image-earphones-yx1.jpg";

export const ProductImages: React.FC = () => {
  return (
    <div>
      <Image mobile={img} tablet={img} desktop={img} alt="img" />
      {/* <Image />
        <Image /> */}
    </div>
  );
};
