import React from "react";
import { conditionalClass } from "./libraries";
import { ArrowIcon } from "./Icons";
import clsx from "clsx";

const Button = ({ filled, className, children, icon, type, rounded }) => {
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
            "border border-[#874CF6]  py-3 px-5 cursor-pointer",
            filled ? "bg-[#874CF6] text-white" : "text-[#874CF6]",
            rounded ? "rounded-full" : "rounded-md"
          )}
        >
          {children}
        </button>
      );

    case "completed":
      return (
        <button
          className={clsx(
            "border border-[#4564D6]  py-2 cursor-pointer",
            filled ? "bg-[#4564D6] text-white" : "text-[#4564D6]",
            rounded ? "rounded-full" : "rounded-md"
          )}
        >
          {children}
        </button>
      );

    case "neutral":
      return (
        <button
          className={clsx(
            "bg-inputColor text-secondaryColor",
            className,
            rounded ? "rounded-full" : "rounded-md"
          )}
        >
          {children}
        </button>
      );

    case "back":
      return (
        <button className="grid grid-cols-[auto_1fr] items-center gap-2 mt-5 font-medium">
          {/* <BsArrowLeft /> */}
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

    case "pending":
      return (
        <button
          className={clsx(
            "border border-[#F3AF0A] py-2 cursor-pointer",
            filled ? "bg-[#F3AF0A] text-white" : "text-[#F3AF0A]",
            rounded ? "rounded-full" : "rounded-md"
          )}
        >
          {children}
        </button>
      );
    default:
      break;
  }
};

export default Button;
