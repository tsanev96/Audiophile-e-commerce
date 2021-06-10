import React, { FC } from "react";

interface CopyProps {
  text: string;
  opacity?: "big" | "small";
  alignCenter?: boolean;
  theme?: "dark" | "light";
  size?: "sm" | "lg";
  className?: string;
}

export const Copy: FC<CopyProps> = ({
  text,
  opacity,
  alignCenter = "",
  theme = "light",
  className = "",
  size = "sm",
  children,
}) => {
  const rootWrapper = "copy";
  return (
    <p
      className={`${rootWrapper} ${opacity && `opacity-${opacity}`} ${
        alignCenter && "centered"
      } ${rootWrapper}__${theme}  ${rootWrapper}__size-${size} ${className}`}
    >
      {children}
      {text}
    </p>
  );
};
