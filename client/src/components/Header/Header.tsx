import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { NavigationContext } from "../../context/navigationContext";
import { NavigationContextDetails } from "../../types/navigationContext";
import { CartPopUp } from "../CartPopUp/CartPopUp";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export interface HeaderProps {
  onShowBasket: () => void;
  isCartPopUpShown: boolean;
}

export const Header: React.FC = () => {
  const { cart } = useContext(CartContext);

  const [isCartPopUpShown, setIsCartPopUpShown] = useState(false);

  const showBasket = () => {
    setIsCartPopUpShown(true);
    console.log("basket clicked", cart);
  };

  const { currentPage } = useContext(
    NavigationContext
  ) as NavigationContextDetails;

  return (
    <div className="header">
      <HeaderMobile
        onShowBasket={showBasket}
        isCartPopUpShown={isCartPopUpShown}
      />
      <HeaderDesktop
        onShowBasket={showBasket}
        isCartPopUpShown={isCartPopUpShown}
      />
      {currentPage && <div className="header__page">{currentPage}</div>}
      <CartPopUp />
    </div>
  );
};
