import React from "react";
import { navLinks } from "../../data/navLinks";
import { Copy } from "../common/Copy/Copy";
import { Headline } from "../common/Headline/Headline";
import { Navigation } from "../common/Navigation/Navigation";
import { FooterSocials } from "./FooterSocials";

export const FooterMobile = () => {
  const rootWrapper = "footer";

  return (
    <div className={`${rootWrapper}__mobile`}>
      <Headline
        className={`${rootWrapper}__headline`}
        text="audiophile"
        level="h4"
      />
      <Navigation data={navLinks} className={`${rootWrapper}__nav`} />
      <Copy
        text="Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Visit our demo facility - we’re open 7 days a week."
        isOpacity
        alignCenter
        className={`${rootWrapper}__description`}
      />
      <Copy
        text="Copyright 2021. All Rights Reserved"
        isOpacity
        className={`${rootWrapper}__copyright`}
      />
      <FooterSocials />
    </div>
  );
};
