import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Headline } from "../common/Headline/Headline";
import { Wrapper } from "../common/Wrapper/Wrapper";
import { HeaderLinks } from "./HeaderLinks";

interface HeaderDesktopProps {
  onShowBasket: () => void;
}
export const HeaderDesktop: React.FC<HeaderDesktopProps> = ({
  onShowBasket,
}) => {
  const rootWrapper = "header";

  return (
    <Wrapper>
      <div className={`${rootWrapper}__desktop`}>
        <Headline
          className={`${rootWrapper}__headline ${rootWrapper}__headline-desktop`}
          text="audiophile"
          level="h4"
        />
        <HeaderLinks />
        <div className={`${rootWrapper}__icon`}>
          <AiOutlineShoppingCart onClick={onShowBasket} />
        </div>
      </div>
    </Wrapper>
  );
};
