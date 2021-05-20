import React, { FC } from "react";
import { ImageDetails } from "../../../types/imageDetails";
import { Button } from "../Button/Button";
import { Headline } from "../Headline/Headline";
import { Image } from "../Image/Image";

interface ProductColumnProps {
  image: ImageDetails;
  headline: string;
  button: {
    text?: string;
    onClick: () => void;
  };
}

export const ProductColumn: FC<ProductColumnProps> = ({
  headline,
  button,
  image,
}) => {
  const rootWrapper = "product-column";

  return (
    <div className={rootWrapper}>
      <Image
        className={`${rootWrapper}__image`}
        mobile={image.mobile}
        tablet={image.tablet}
        desktop={image.desktop}
        alt={image.alt}
      />
      <div className={`${rootWrapper}__content`}>
        <Headline theme="dark" text={headline} level="h4" />
        <Button
          text={button.text ? button.text : "SEE PRODUCT"}
          onClick={button.onClick}
          type="tertiary"
        />
      </div>
    </div>
  );
};
