import React from "react";
import { Link } from "react-router-dom";
import { headerLinks } from "./headerData";

export const HeaderLinks = () => {
  return (
    <div className="header__nav">
      <nav>
        <ul>
          {headerLinks.map(({ to, name }) => (
            <li key={to}>
              <Link to={to}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
