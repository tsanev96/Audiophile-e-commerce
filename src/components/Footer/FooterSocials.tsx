import React from "react";
import { socialsLinks } from "./footerData";

export const FooterSocials = () => {
  return (
    <div className="footer__socials">
      {socialsLinks.map((link) => (
        <a href={link.to}>{link.icon}</a>
      ))}
    </div>
  );
};
