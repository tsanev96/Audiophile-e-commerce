import React from "react";
import { Link } from "react-router-dom";
import { headerLinks } from "./headerData";

export const HeaderLinks = () => {
  return (
    <nav className="header__nav">
      <ul>
        {headerLinks.map(({ to, name }) => (
          <li key={to}>
            <Link to={to}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
