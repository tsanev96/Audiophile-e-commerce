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
  image?: ImageDetails;
  theme?: "dark" | "light";
}
export const ProductImage: FC<ProductImageProps> = ({
  headline,
  button,
  image,
  theme = "light",
}) => {
  const rootWrapper = "product-image";

  return (
    <div className={`${rootWrapper} ${!image && `${rootWrapper}__image-bg`}`}>
      {image && (
        <ImageBackground
          mobile={image.mobile}
          tablet={image.tablet}
          desktop={image.desktop}
          alt={image.alt}
        />
      )}
      <Headline
        className={`${rootWrapper}__headline`}
        text={headline}
        level="h4"
        theme={theme}
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
