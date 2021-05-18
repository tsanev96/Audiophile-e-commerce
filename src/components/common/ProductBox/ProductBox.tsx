import React, { FC } from "react";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { Headline } from "../Headline/Headline";
import img from "../../../assets/product-zx7-speaker/mobile/image-product.jpg";
interface ProductBoxProps {
  headline: string;
  buttonText: string;
  onClick: () => void;
  theme?: "dark" | "light";
  img: string;
}

export const ProductBox: FC<ProductBoxProps> = ({
  headline,
  buttonText,
  onClick,
  theme = "light",
}) => {
  const rootWrapper = "product-box";
  return (
    <div className={rootWrapper}>
      <img className={`${rootWrapper}__img`} src={img} alt="" />
      <Headline
        className={`${rootWrapper}__headline`}
        text={headline}
        level="h6"
        theme={theme}
      />
      <ButtonLink
        className={`${rootWrapper}__button`}
        text={buttonText}
        onClick={onClick}
        theme="light"
      />
    </div>
  );
};
