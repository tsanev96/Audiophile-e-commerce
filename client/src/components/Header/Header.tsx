import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { NavigationContext } from "../../context/navigationContext";
import { NavigationContextDetails } from "../../types/navigationContext";
import { CartPopUp } from "../CartPopUp/CartPopUp";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export interface HeaderProps {
  onBasketClick: () => void;
  isCartPopUpShown?: boolean;
}

export const Header: React.FC = () => {
  const [isCartPopUpShown, setIsCartPopUpShown] = useState(false);

  const showBasket = () => setIsCartPopUpShown((prevState) => !prevState);

  const { currentPage } = useContext(
    NavigationContext
  ) as NavigationContextDetails;

  return (
    <div className="header">
      <HeaderMobile onBasketClick={showBasket} />
      <HeaderDesktop
        onBasketClick={showBasket}
        isCartPopUpShown={isCartPopUpShown}
      />
      {currentPage && <div className="header__page">{currentPage}</div>}
      {isCartPopUpShown && <CartPopUp device="mobile" />}
    </div>
  );
};
