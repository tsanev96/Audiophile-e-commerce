import React, { FC } from "react";
import { Wrapper } from "../common/Wrapper/Wrapper";
import { FooterMobile } from "./FooterMobile";

export const Footer = () => {
  const rootWrapper = "footer";

  return (
    <div className={rootWrapper}>
      <Wrapper>
        <FooterMobile />
      </Wrapper>
    </div>
  );
};
