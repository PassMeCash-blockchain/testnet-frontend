import React from "react";
import { conditionalClass } from "./libraries";
import { BsArrowLeft, ArrowIcon } from "./Icons";
import clsx from "clsx";
// button random
const Button = ({ filled, className, children, icon, type }) => {
  switch (type) {
    case "Icon":
      return (
        <>
          <button className="bg-inputColor grid grid-cols-6  px-2 py-2 w-[300px]">
            <div className="cols-span-1">
              <span>{icon}</span>
            </div>

            <div className="cols-span-5">
              {children}
              <ArrowIcon direction={`right`} />
            </div>
          </button>
        </>
      );
    case "filled":
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

    case "neutral":
      return (
        <button
          className={clsx("bg-inputColor text-secondaryColor", className)}
        >
          {children}
        </button>
      );

    case "back":
      return (
        <button className="grid grid-cols-[auto_1fr] items-center gap-2 mt-5 font-medium">
          <BsArrowLeft />
          Back to login
        </button>
      );

    case "menu":
      return (
        <div
          className={clsx(
            "border border-[#874CF6]  py-3 px-5 cursor-pointer  rounded-md",
            filled ? "bg-[#874CF6] text-white" : "text-[#874CF6]",
            className
          )}
        >
          {children}
        </div>
      );
    default:
      break;
  }
};

export default Button;
