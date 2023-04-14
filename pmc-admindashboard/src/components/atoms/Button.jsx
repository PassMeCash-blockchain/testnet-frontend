import clsx from "clsx";
import React from "react";

const Button = ({ filled, className, children }) => {
  return (
    <button
      className={clsx(
        "border border-[#874CF6]  py-2 px-2 cursor-pointer  rounded-md",
        filled ? "bg-[#874CF6] text-white" : "text-[#874CF6]",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;