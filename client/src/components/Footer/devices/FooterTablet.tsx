import React from "react";
import { navLinks } from "../../../data/navLinks";
import { Navigation } from "../../common/Navigation/Navigation";
import { FooterCopyright } from "../common/FooterCopyright";
import { FooterDescription } from "../common/FooterDescription";
import { FooterHeadline } from "../common/FooterHeadline";
import { FooterSocials } from "../FooterSocials";

export const FooterTablet = () => {
  const rootWrapper = "footer";

  return (
    <div className={`${rootWrapper}__tablet`}>
      <FooterHeadline />
      <Navigation data={navLinks} className={`${rootWrapper}__nav`} />
      <FooterDescription />
      <div className="footer__bottom">
        <FooterCopyright />
        <FooterSocials />
      </div>
    </div>
  );
};
