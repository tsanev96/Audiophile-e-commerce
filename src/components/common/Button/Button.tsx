import React, { FC } from "react";

interface ButtonProps {
  text: string;
  type: "primary" | "secondary";
  onClick: () => void;
}
export const Button: FC<ButtonProps> = ({ text, type, onClick }) => {
  return (
    <button onClick={onClick} className={`btn btn__${type}`}>
      {text}
    </button>
  );
};
