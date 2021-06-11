import React, { FC } from "react";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { Headline } from "../Headline/Headline";
import img from "../../../assets/product-zx7-speaker/mobile/1.jpg";
import { Image } from "../Image/Image";

interface ProductBoxProps {
  headline: string;
  buttonText: string;
  theme?: "dark" | "light";
  linkTo: string;
}

export const ProductBox: FC<ProductBoxProps> = ({
  headline,
  buttonText,
  theme = "light",
  linkTo,
}) => {
  const rootWrapper = "product-box";
  return (
    <div className={rootWrapper}>
      <Image mobile={img} tablet={img} desktop={img} alt="" />
      <Headline
        className={`${rootWrapper}__headline`}
        text={headline}
        level="h6"
        theme={theme}
      />
      <ButtonLink
        className={`${rootWrapper}__button`}
        text={buttonText}
        theme="light"
        linkTo={linkTo}
      />
    </div>
  );
};
