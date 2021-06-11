import React, { FC } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
  text: string;
  onClick?: () => void;
  className?: string;
  theme?: "dark" | "light";
  linkTo?: string;
}

export const ButtonLink: FC<ButtonLinkProps> = ({
  text,
  onClick,
  className = "",
  theme = "light",
  linkTo,
}) => {
  return (
    <>
      {linkTo ? (
        <Link
          className={`btn-link btn-link__${theme} ${className}`}
          to={linkTo}
        >
          {text}
          <RiArrowRightSLine />
        </Link>
      ) : (
        <button
          className={`btn-link btn-link__${theme} ${className}`}
          onClick={onClick}
        >
          {text}
          <RiArrowRightSLine />
        </button>
      )}
    </>
  );
};
