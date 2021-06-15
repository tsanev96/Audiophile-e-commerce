import React from "react";

interface NotFoundProps {
  message?: string;
}

export const NotFound: React.FC<NotFoundProps> = ({ message }) => {
  return <div>{message ? message : "Page was not found"}</div>;
};
