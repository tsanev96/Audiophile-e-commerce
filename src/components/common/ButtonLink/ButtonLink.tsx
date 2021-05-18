import React, { FC } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
interface ButtonLinkProps {
  text: string;
  onClick: () => void;
  className?: string;
  theme?: "dark" | "light";
}

export const ButtonLink: FC<ButtonLinkProps> = ({
  text,
  onClick,
  className = "",
  theme = "light",
}) => {
  return (
    <button
      className={`btn-link btn-link__${theme} ${className}`}
      onClick={onClick}
    >
      {text}
      <RiArrowRightSLine />
    </button>
  );
};
