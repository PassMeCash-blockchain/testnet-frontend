import React from "react";
import { Images } from "./libraries";

const InputField = ({
  onChange,
  className,
  type,
  icon,
  hasIcon = !1,
  placeHolder,
}) => {
  return (
    <>
<<<<<<< HEAD
      <input
        type={type}
        placeholder={placeHolder}
        className={`${className} bg-none rounded-md relative`}
        onChange={onChange}
      />
      {!!hasIcon && (
        <Images
          className={` absolute bottom-[20rem]`}
          src={icon}
          width={20}
          height={5}
        />
      )}
=======
      <input type={type} placeholder={placeHolder} className={`${className} bg-none rounded-md static`} onchange={onChange} />
      {!!hasIcon && 
         <Images className={` absolute top-[22%] left-[20rem] lg:left-[22rem] `} src={icon} width={20} height={5}/>
      }
>>>>>>> 1657606cacdb58eb91fb8a6523f03f1b2cc55167
    </>
  );
};

export default InputField;
