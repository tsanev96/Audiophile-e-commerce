import React from "react";
import { Wrapper } from "../common/Wrapper/Wrapper";
import { FooterDesktop } from "./devices/FooterDesktop";
import { FooterMobile } from "./devices/FooterMobile";
import { FooterTablet } from "./devices/FooterTablet";

export const Footer = () => {
  return (
    <div className="footer">
      <Wrapper>
        <FooterMobile />
        <FooterTablet />
        <FooterDesktop />
      </Wrapper>
    </div>
  );
};
