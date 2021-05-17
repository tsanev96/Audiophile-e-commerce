import React, { FC } from "react";
import { ImageDetails } from "../../../types/imageDetails";
import { Button } from "../Button/Button";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import { ImageBackground } from "../ImageBackground/ImageBackground";

interface StageTeaserProps {
  smallHeadline: string;
  headline: string;
  description: string;
  button: {
    text: string;
  };
  image: ImageDetails;
}

export const StageTeaser: FC<StageTeaserProps> = ({
  smallHeadline,
  headline,
  description,
  button,
  image,
}) => {
  const rootWrapper = "stage-teaser";

  return (
    <div className={rootWrapper}>
      <Copy
        className={`${rootWrapper}__small-headline`}
        text={smallHeadline}
        isOpacity
      />
      <Headline
        className={`${rootWrapper}__headline`}
        text={headline}
        level="h3"
      />
      <Copy className={`${rootWrapper}__description`} text={description} />
      <Button
        className={`${rootWrapper}__button`}
        text={button.text}
        onClick={() => {}}
      />
      <ImageBackground
        mobile={image.mobile}
        tablet={image.tablet}
        desktop={image.desktop}
        alt={image.alt}
      />
    </div>
  );
};
