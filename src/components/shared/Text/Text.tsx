import React from "react";
import "./Text.scss";

export const Text: React.FC = ({ children }) => {
  return <span className="Text">{children}</span>;
};
