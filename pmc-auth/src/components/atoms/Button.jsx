import clsx from "clsx";
import React from "react";
<<<<<<< HEAD
=======
import { BsArrowLeft } from "react-icons/bs";
>>>>>>> origin/main

const Button = ({ filled, className, children }) => {
  return (
    <button
      className={clsx(
        "border border-[#874CF6]  py-3 px-5 cursor-pointer  rounded-md",
        filled ? "bg-[#874CF6] text-white" : "text-[#874CF6]",
        className
      )}
    >
      {children}
    </button>
  );
};

<<<<<<< HEAD
=======
export const BackToLogin = () => {
  return (
    <button className="grid grid-cols-[auto_1fr] items-center gap-2 mt-5 font-medium">
      <BsArrowLeft />
      Back to login
    </button>
  );
};

>>>>>>> origin/main
export default Button;
