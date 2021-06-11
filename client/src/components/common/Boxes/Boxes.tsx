import React, { FC } from "react";

interface BoxesProps {
  children: JSX.Element | JSX.Element[];
}

export const Boxes: FC<BoxesProps> = ({ children }) => {
  return <div className="boxes">{children}</div>;
};
