import React from "react";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export const Wrapper: React.FC<WrapperProps> = ({ className, children }) => {
  return <div className={`wrapper ${className}`}>{children} </div>;
};
