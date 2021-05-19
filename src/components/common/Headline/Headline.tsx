import React, { FC } from "react";

interface HeadlineProps {
  text: string;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  theme?: "dark" | "light";
}

export const Headline: FC<HeadlineProps> = ({
  text,
  level,
  className = "",
  theme = "light",
}) => {
  return (
    <h1 className={`${className} headline ${level} headline__${theme}`}>
      {text}
    </h1>
  );
};
