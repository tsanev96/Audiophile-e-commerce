import React, { FC } from "react";
import { ImageDetails } from "../../../types/imageDetails";
import { Button } from "../Button/Button";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import { Image } from "../Image/Image";

interface ProductItemProps {
  id: number;
  isProductNew: boolean;
  headline: string;
  description: string;
  image: ImageDetails;
  button: {
    text?: string;
    onClick: (id: number) => void;
  };
}

export const ProductItem: FC<ProductItemProps> = ({
  id,
  isProductNew,
  headline,
  description,
  image,
  button,
}) => {
  const rootWrapper = "product-item";

  return (
    <div className={rootWrapper}>
      <div className={`${rootWrapper}__image-container`}>
        <Image
          mobile={image.mobile}
          tablet={image.tablet}
          desktop={image.tablet}
          alt={image.alt}
        />
      </div>
      <div className={`${rootWrapper}__content`}>
        {isProductNew && (
          <Copy theme="dark" className="new-product" text="NEW PRODUCT" />
        )}
        <Headline theme="dark" level="h2" text={headline} />
        <Copy theme="dark" className="description" text={description} />
        <Button
          text={button.text ? button.text : "SEE PRODUCT"}
          onClick={() => button.onClick(id)}
        />
      </div>
    </div>
  );
};
