import React, { FC } from "react";

interface CopyProps {
  text: string;
  isOpacity?: boolean;
  alignCenter?: boolean;
  theme?: "dark" | "light";
  className?: string;
}

export const Copy: FC<CopyProps> = ({
  text,
  isOpacity,
  alignCenter = "",
  theme = "light",
  className = "",
}) => {
  const rootWrapper = "copy";
  return (
    <p
      className={`${rootWrapper} ${isOpacity && `${rootWrapper}__opacity`} ${
        alignCenter && `${rootWrapper}__centered`
      } ${rootWrapper}__${theme} ${className}`}
    >
      {text}
    </p>
  );
};
