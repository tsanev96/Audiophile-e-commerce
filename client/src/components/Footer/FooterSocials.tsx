import React from "react";
import { socialsLinks } from "./footerData";

export const FooterSocials = () => {
  return (
    <div className="footer__socials">
      {socialsLinks.map((link) => (
        <a key={link.to} href={link.to}>
          {link.icon}
        </a>
      ))}
    </div>
  );
};
