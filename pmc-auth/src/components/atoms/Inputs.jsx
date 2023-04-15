import { useEffect, useRef, useState } from "react";
import { ArrowIcon, EyeIcon } from "./libraries";
import clsx from "clsx";

const Inputs = ({ label, type, options, value, setValueFn }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [isDropDown, setisDropDown] = useState(false);
  const input = useRef(null);

  useEffect(() => {
    // Input Focus
    input !== null &&
      input.current?.addEventListener("focus", () => {
        setIsFocus(true);
      });

    // Input Focus Out
    input !== null &&
      input.current?.addEventListener("focusout", () => {
        input.current.value === "" && setIsFocus(false);
      });
  }, []);

  switch (type) {
    case "phone":
      return (
        <div className="grid grid-cols-[auto_1fr] gap-6">
          {/* Country Code */}
          <div className="border border-[#ABA6A6] rounded-md pl-3 pr-6 grid place-content-center">
            +234
          </div>

          {/* Input */}
          <label className="border block border-[#ABA6A6] relative rounded-md">
            <input
              ref={input}
              type={type}
              className="p-3 w-full bg-transparent outline-none"
            />
            <span
              className={clsx(
                "absolute left-3 leading-[15px] px-1 text-[#777] bg-[#FCFCFC] top-0 -translate-y-1/2 transition-all",
                !isFocus && "top-1/2"
              )}
            >
              Phone Number
            </span>
          </label>
        </div>
      );

    case "password":
      return (
        <label className="border border-[#ABA6A6] relative rounded-md grid grid-cols-[1fr_auto] items-center">
          <input
            ref={input}
            type={showPass ? "text" : "password"}
            className="p-3 w-full bg-transparent outline-none"
          />
          <div
            className="pr-3 cursor-pointer"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <EyeIcon type="open" /> : <EyeIcon type="close" />}
          </div>
          <span
            className={clsx(
              "absolute left-3 leading-[15px] px-1 text-[#777] bg-[#FCFCFC] top-0 -translate-y-1/2 transition-all",
              !isFocus && "top-1/2"
            )}
          >
            {label}
          </span>
        </label>
      );

    case "select":
      return (
        <label
          className="border border-[#ABA6A6] p-3 relative rounded-md grid grid-cols-[1fr_auto] items-center cursor-pointer"
          onClick={() => setisDropDown(!isDropDown)}
        >
          <p></p>
          <div className="pr-3">
            {isDropDown ? (
              <ArrowIcon direction="down" />
            ) : (
              <ArrowIcon direction="right" />
            )}
          </div>
          {/* Placeholder */}
          <span
            className={clsx(
              "absolute left-3 leading-[15px] px-1 text-[#777] bg-[#FCFCFC] top-0 -translate-y-1/2 transition-all",
              !isFocus && "top-1/2"
            )}
          >
            {label}
          </span>
          {/* DropDown */}
          {isDropDown && (
            <div className="absolute top-16 w-full shadow-[0px_4px_4px_#B3B3B3]">
              {options?.map((option, i) => (
                <p>{option}</p>
              ))}
            </div>
          )}
        </label>
      );

    default:
      return (
        <label className="border block border-[#ABA6A6] relative rounded-md">
          <input
            ref={input}
            type={type}
            className="p-3 w-full bg-transparent outline-none"
          />
          <span
            className={clsx(
              "absolute left-3 leading-[15px] px-1 text-[#777] bg-[#FCFCFC] top-0 -translate-y-1/2 transition-all",
              !isFocus && "top-1/2"
            )}
          >
            {label}
          </span>
        </label>
      );
      break;
  }
};

export default Inputs;
