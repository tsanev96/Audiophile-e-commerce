import React from "react";
import { navLinks } from "../../data/navLinks";
import { Headline } from "../common/Headline/Headline";
import { Navigation } from "../common/Navigation/Navigation";

export const FooterMobile = () => {
  const rootWrapper = "footer";

  return (
    <div className={`${rootWrapper}__mobile`}>
      <Headline text="audiophile" level="h4" />
      <Navigation data={navLinks} className={`${rootWrapper}__nav`} />
    </div>
  );
};
