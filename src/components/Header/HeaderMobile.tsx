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

  return (
    <div className="header__mobile">
      <div className="header__menu-wrapper">
        <div
          onClick={onHamburgerMenuClick}
          className={`hamburger-menu ${isHamburgerMenuClicked && "active"}`}
        >
          <div />
        </div>
      </div>
      <Headline className="header__headline" text="audiophile" level="h3" />
      <div className="header__icon">
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
