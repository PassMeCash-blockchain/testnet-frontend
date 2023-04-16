import React from "react";

const SectionSpacing = ({ children, className }) => {
  return <div className={`px-4 ${className}`}>{children}</div>;
};

export default SectionSpacing;
