import React, { FC } from "react";
import { ImageDetails } from "../../../types/imageDetails";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import { Image } from "../Image/Image";

interface ImageTextProps {
  headline: {
    firstPart: string;
    secondPart: string;
    thirdPart: string;
  };
  description: string;
  image: ImageDetails;
}

export const ImageText: FC<ImageTextProps> = ({
  headline,
  description,
  image,
}) => {
  const rootWrapper = "image-text";

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
        <h4 className="headline h4 headline__dark">
          {headline.firstPart}
          <span> {headline.secondPart} </span>
          {headline.thirdPart}
        </h4>
        <Copy theme="dark" text={description} opacity="small" />
      </div>
    </div>
  );
};
