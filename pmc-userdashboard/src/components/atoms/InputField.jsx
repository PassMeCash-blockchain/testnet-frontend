import React from "react";

const InputField = ({ onChange, className, type }) => {
  return <input type={type} className={`${className}`} onChange={onChange} />;
};

export default InputField;
