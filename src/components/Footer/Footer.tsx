import React from "react";
import { Wrapper } from "../common/Wrapper/Wrapper";
import { FooterDesktop } from "./devices/FooterDesktop";
import { FooterMobile } from "./devices/FooterMobile";
import { FooterTablet } from "./devices/FooterTablet";

export const Footer = () => {
  const rootWrapper = "footer";

  return (
    <div className={rootWrapper}>
      <Wrapper>
        <FooterMobile />
        <FooterTablet />
        <FooterDesktop />
      </Wrapper>
    </div>
  );
};
