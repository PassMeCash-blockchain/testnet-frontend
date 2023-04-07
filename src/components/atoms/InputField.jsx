import React from "react";

const inputField = ({ onChange, className, type, placeholder }) => {
  return (
    <input
      type={type}
      className={`${className}`}
      placeholder={placeholder}
      onchange={onChange}
    />
  );
};

export default inputField;
