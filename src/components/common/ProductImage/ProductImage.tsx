import React, { FC } from "react";
import { ImageDetails } from "../../../types/imageDetails";
import { Button } from "../Button/Button";
import { Headline } from "../Headline/Headline";
import { ImageBackground } from "../ImageBackground/ImageBackground";

interface ProductImageProps {
  headline: string;
  button: {
    text?: string;
    onClick: () => void;
  };
  image: ImageDetails;
}
export const ProductImage: FC<ProductImageProps> = ({
  headline,
  button,
  image,
}) => {
  const rootWrapper = "product-image";

  return (
    <div className={rootWrapper}>
      <ImageBackground
        mobile={image.mobile}
        tablet={image.tablet}
        desktop={image.desktop}
        alt={image.alt}
      />
      <Headline
        className={`${rootWrapper}__headline`}
        text={headline}
        level="h4"
      />
      <Button
        className={`${rootWrapper}__button`}
        text={button.text ? button.text : "SEE PRODUCT"}
        onClick={button.onClick}
        type="tertiary"
      />
    </div>
  );
};
