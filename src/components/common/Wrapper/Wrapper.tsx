import React from "react";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="wrapper">{children} </div>;
};
