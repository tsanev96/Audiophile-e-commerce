import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Headline } from "../common/Headline/Headline";
import { HeaderLinks } from "./HeaderLinks";

interface HeaderMobileProps {
  onShowBasket: () => void;
}

export const HeaderMobile: React.FC<HeaderMobileProps> = ({ onShowBasket }) => {
  const [isHamburgerMenuClicked, setIsHamburgerMenuClicked] = useState(false);

  const onHamburgerMenuClick = () =>
    setIsHamburgerMenuClicked(!isHamburgerMenuClicked);

  const rootWrapper = "header";

  return (
    <div className={`${rootWrapper}__mobile`}>
      <div className={`${rootWrapper}__menu-wrapper`}>
        <div
          onClick={onHamburgerMenuClick}
          className={`hamburger-menu ${isHamburgerMenuClicked && "active"}`}
        >
          <div />
        </div>
        <Headline
          className={`${rootWrapper}__headline ${rootWrapper}__headline-tablet`}
          text="audiophile"
          level="h4"
        />
      </div>
      <Headline
        className={`${rootWrapper}__headline ${rootWrapper}__headline-mobile`}
        text="audiophile"
        level="h4"
      />
      <div className={`${rootWrapper}__icon`}>
        <AiOutlineShoppingCart onClick={onShowBasket} />
      </div>
      <div
        className={`header__nav-mobile-wrapper ${
          isHamburgerMenuClicked ? "active" : ""
        }`}
      >
        <HeaderLinks />
      </div>
    </div>
  );
};
