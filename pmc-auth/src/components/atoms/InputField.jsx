import React from "react";

const inputField = ({ onChange, className, type, icon, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${className}`}
      onchange={onChange}
    />
  );
};

export default inputField;
