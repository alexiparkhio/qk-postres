import React from "react";
import "./Header.scss";

export const Header: React.FC = ({ children }) => {
  return <span className="Header">{children}</span>;
};
