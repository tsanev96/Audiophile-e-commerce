import React from "react";
import { Button } from "../common/Button/Button";
import { ButtonLink } from "../common/ButtonLink/ButtonLink";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export const Header = () => {
  const showBasket = () => {
    console.log("basket clicked");
  };

  return (
    <div className="header">
      <HeaderMobile onShowBasket={showBasket} />
      <HeaderDesktop onShowBasket={showBasket} />
    </div>
  );
};
