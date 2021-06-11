import React, { useContext } from "react";
import { NavigationContext } from "../../context/navigationContext";
import { NavigationContextDetails } from "../../types/navigationContext";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export const Header = () => {
  const showBasket = () => {
    console.log("basket clicked");
  };

  const { currentPage } = useContext(
    NavigationContext
  ) as NavigationContextDetails;

  return (
    <div className="header">
      <HeaderMobile onShowBasket={showBasket} />
      <HeaderDesktop onShowBasket={showBasket} />
      {currentPage && <div className="header__page">{currentPage}</div>}
    </div>
  );
};
