import React from "react";
import { navLinks } from "../../../data/navLinks";
import { Navigation } from "../../common/Navigation/Navigation";
import { FooterCopyright } from "../common/FooterCopyright";
import { FooterDescription } from "../common/FooterDescription";
import { FooterHeadline } from "../common/FooterHeadline";
import { FooterSocials } from "../FooterSocials";

export const FooterDesktop = () => {
  const rootWrapper = "footer";

  return (
    <div className={`${rootWrapper}__desktop`}>
      <div className={`${rootWrapper}__top`}>
        <FooterHeadline />
        <Navigation data={navLinks} className={`${rootWrapper}__nav`} />
      </div>
      <div className={`${rootWrapper}__middle`}>
        <FooterDescription />
        <FooterSocials />
      </div>
      <FooterCopyright />
    </div>
  );
};
