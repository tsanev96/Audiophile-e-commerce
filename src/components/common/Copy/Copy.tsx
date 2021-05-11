import React, { FC } from "react";

interface CopyProps {
  text: string;
  isOpacity?: boolean;
  alignCenter?: boolean;
  theme?: "dark" | "light";
  size?: "sm" | "lg";
  className?: string;
}

export const Copy: FC<CopyProps> = ({
  text,
  isOpacity,
  alignCenter = "",
  theme = "light",
  className = "",
  size = "sm",
}) => {
  const rootWrapper = "copy";
  return (
    <p
      className={`${rootWrapper} ${isOpacity && "opacity"} ${
        alignCenter && "centered"
      } ${rootWrapper}__${theme}  ${rootWrapper}__size-${size} ${className}`}
    >
      {text}
    </p>
  );
};
