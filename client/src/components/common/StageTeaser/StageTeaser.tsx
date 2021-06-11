import React, { FC } from "react";
import { ImageDetails } from "../../../types/imageDetails";
import { Button } from "../Button/Button";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import { ImageBackground } from "../ImageBackground/ImageBackground";
import { Wrapper } from "../Wrapper/Wrapper";

interface StageTeaserProps {
  smallHeadline?: string;
  headline: string;
  description: string;
  button: {
    text: string;
  };
  image: ImageDetails;
  theme: "dark" | "light";
}

export const StageTeaser: FC<StageTeaserProps> = ({
  smallHeadline,
  headline,
  description,
  button,
  image,
  theme,
}) => {
  const rootWrapper = "stage-teaser";

  return (
    <div className={rootWrapper}>
      <Wrapper className={`${rootWrapper}__content`}>
        <div className="info">
          {smallHeadline && (
            <Copy
              className={`${rootWrapper}__small-headline`}
              text={smallHeadline}
              opacity="small"
              theme={theme}
            />
          )}
          <Headline
            className={`${rootWrapper}__headline`}
            text={headline}
            level="h1"
            theme={theme}
          />
          <Copy
            className={`${rootWrapper}__description`}
            text={description}
            opacity="big"
            theme={theme}
          />
          <Button
            className={`${rootWrapper}__button`}
            text={button.text}
            onClick={() => {}}
          />
        </div>
        <ImageBackground
          className={`${rootWrapper}__background`}
          mobile={image.mobile}
          tablet={image.tablet}
          desktop={image.desktop}
          alt={image.alt}
        />
      </Wrapper>
    </div>
  );
};
