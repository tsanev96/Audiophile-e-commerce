import React, { FC } from "react";

interface ButtonProps {
  text: string;
  type?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  className?: string;
  isFullWidth?: boolean;
}
export const Button: FC<ButtonProps> = ({
  text,
  type = "primary",
  onClick,
  className = "",
  isFullWidth = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn__${type} ${isFullWidth && "full-width"} ${className}`}
    >
      {text}
    </button>
  );
};
