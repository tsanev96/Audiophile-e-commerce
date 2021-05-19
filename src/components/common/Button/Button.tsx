import React, { FC } from "react";

interface ButtonProps {
  text: string;
  type?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  className?: string;
}
export const Button: FC<ButtonProps> = ({
  text,
  type = "primary",
  onClick,
  className = "",
}) => {
  return (
    <button onClick={onClick} className={`btn btn__${type} ${className}`}>
      {text}
    </button>
  );
};
