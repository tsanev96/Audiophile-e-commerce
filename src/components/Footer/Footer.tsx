import React from "react";
import { Wrapper } from "../common/Wrapper/Wrapper";
import { FooterMobile } from "./FooterMobile";
import { FooterTablet } from "./FooterTablet";

export const Footer = () => {
  const rootWrapper = "footer";

  return (
    <div className={rootWrapper}>
      <Wrapper>
        <FooterMobile />
        <FooterTablet />
      </Wrapper>
    </div>
  );
};
