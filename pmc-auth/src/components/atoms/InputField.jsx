<<<<<<< HEAD
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
=======
import React from 'react'
import { Images } from './libraries'

const InputField = ({onChange,className,type, icon, hasIcon=!1,placeHolder}) => {
  return (
    <>
      <input type={type} placeholder={placeHolder} className={`${className} bg-none rounded-md relative`} onchange={onChange} />
      {!!hasIcon && 
         <Images className={` absolute bottom-[20rem]`} src={icon} width={20} height={5}/>
      }
    </>
  )
}

export default InputField
>>>>>>> 988dd96105bb55cc4d43f289f5fa2de87a2a7d39
