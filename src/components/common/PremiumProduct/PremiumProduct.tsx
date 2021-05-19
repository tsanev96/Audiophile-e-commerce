import React, { FC } from "react";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import { Image } from "../Image/Image";
import img from "../../../assets/product-yx1-earphones/mobile/image-gallery-3.jpg";
import { Button } from "../Button/Button";

interface PremiumProductProps {
  headline: string;
  description: string;
  button: {
    text: string;
  };
  theme?: "dark" | "light";
}

export const PremiumProduct: FC<PremiumProductProps> = ({
  headline,
  description,
  button,
  theme = "light",
}) => {
  const rootWrapper = "premium-product";

  return (
    <div className={rootWrapper}>
      <div className={`${rootWrapper}__circles`} />
      <div className={`${rootWrapper}__content`}>
        <Image
          className={`${rootWrapper}__image`}
          mobile={img}
          tablet={img}
          desktop={img}
          alt=""
        />
        <div className={`${rootWrapper}__info`}>
          <Headline
            className={`${rootWrapper}__headline`}
            theme={theme}
            text={headline}
            level="h1"
          />
          <Copy
            className={`${rootWrapper}__description`}
            theme={theme}
            text={description}
            opacity="small"
          />
          <Button text={button.text} type="secondary" />
        </div>
      </div>
    </div>
  );
};
