import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { NavigationContext } from "../../../context/navigationContext";
import { NavigationContextDetails } from "../../../types/navigationContext";
import { useLocation } from "react-router-dom";

interface NavigationProps {
  data: { to: string; name: string }[];
  className: string;
}

export const Navigation: FC<NavigationProps> = ({ data, className }) => {
  const location = useLocation();

  const { setCurrentPage } = useContext(
    NavigationContext
  ) as NavigationContextDetails;

  const handleLinkClick = () => {
    const pathname = location.pathname.substring(1);

    setCurrentPage(pathname);
  };

  return (
    <nav className={className}>
      <ul>
        {data.map(({ to, name }) => (
          <li key={to}>
            <Link to={to} onClick={handleLinkClick}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
