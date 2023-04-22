<<<<<<< HEAD
import React from "react";

const InputField = ({ onChange, className, type }) => {
  return <input type={type} className={`${className}`} onChange={onChange} />;
};

export default InputField;
=======
import React from 'react'

const inputField = ({onChange,className,type}) => {
  return (
      <input type={type} className={ `${className}`} onchange={onChange} />
  )
}

export default inputField
>>>>>>> origin/main
