import React, { FC } from "react";
import { Link } from "react-router-dom";

interface NavigationProps {
  data: { to: string; name: string }[];
  className: string;
}

export const Navigation: FC<NavigationProps> = ({ data, className }) => {
  return (
    <nav className={className}>
      <ul>
        {data.map(({ to, name }) => (
          <li key={to}>
            <Link to={to}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
