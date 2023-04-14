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
    </>
  );
};

export default InputField;
