import React, { useState } from "react";
import { HeaderMobile } from "./HeaderMobile";

export const Header = () => {
  const showBasket = () => {
    console.log("basket clicked");
  };

  return (
    <div className="header">
      <HeaderMobile onShowBasket={showBasket} />
    </div>
  );
};
