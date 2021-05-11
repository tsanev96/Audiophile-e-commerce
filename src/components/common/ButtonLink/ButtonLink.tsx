import React, { FC } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
interface ButtonLinkProps {
  text: string;
  onClick: () => void;
}

export const ButtonLink: FC<ButtonLinkProps> = ({ text, onClick }) => {
  return (
    <button className="btn-link" onClick={onClick}>
      {text}
      <RiArrowRightSLine />
    </button>
  );
};
