import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { navLinks } from "../../data/navLinks";
import { Headline } from "../common/Headline/Headline";
import { Navigation } from "../common/Navigation/Navigation";
import { Wrapper } from "../common/Wrapper/Wrapper";

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
        <Navigation data={navLinks} className={`${rootWrapper}__nav`} />
        <div className={`${rootWrapper}__icon`}>
          <AiOutlineShoppingCart onClick={onShowBasket} />
        </div>
      </div>
    </Wrapper>
  );
};
