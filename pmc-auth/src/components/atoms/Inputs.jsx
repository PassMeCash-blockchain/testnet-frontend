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
              value={value}
              onChange={(e) => setValueFn(e.target.value)}
            />

            {/* Label */}
            <span
              className={clsx(
                "absolute z-10 left-3 leading-[12px] scale text-[#777] bg-[#FCFCFC] -translate-y-1/2 text-lg px-0 transition-all",
                isFocus ? "-top-[2px] px-2 scale-75" : "top-1/2"
              )}
            >
              {label}
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
            value={value}
            onChange={(e) => setValueFn(e.target.value)}
          />
          <div
            className="pr-3 cursor-pointer"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <EyeIcon type="open" /> : <EyeIcon type="close" />}
          </div>

          {/* Label */}
          <span
            className={clsx(
              "absolute z-10 left-3 leading-[12px] scale text-[#777] bg-[#FCFCFC] -translate-y-1/2 text-lg px-0 transition-all",
              isFocus ? "-top-[2px] px-2 scale-75" : "top-1/2"
            )}
          >
            {label}
          </span>
        </label>
      );

    case "select":
      return (
        <label
          className="border border-[#ABA6A6] block p-4 relative rounded-md"
          onClick={() => setisDropDown(!isDropDown)}
        >
          <div className="grid grid-cols-[1fr_auto] items-center cursor-pointer">
            <p className="leading-[15px]">{value}</p>
            <div className="pr-3">
              {isDropDown ? (
                <ArrowIcon direction="down" />
              ) : (
                <ArrowIcon direction="right" />
              )}
            </div>
          </div>

          {/* Label */}
          <span
            className={clsx(
              "absolute z-10 left-3 leading-[12px] scale text-[#777] bg-[#FCFCFC] top-1/2 -translate-y-1/2 text-lg px-0 transition-all",
              isDropDown && "-top-[2px] px-2",
              value !== "" && "-top-[2px] px-2"
            )}
          >
            {label}
          </span>
          {/* DropDown */}
          {isDropDown && (
            <div className="absolute top-12 left-0 w-full grid gap-2 p-3 rounded-md shadow-[0_0_5px_1px_rgba(0,0,0,0.1)]">
              {options?.map((option, i) => (
                <p
                  className="cursor-pointer "
                  onClick={() => setValueFn(option)}
                >
                  {option}
                </p>
              ))}
            </div>
          )}
        </label>
      );

    case "date":
      return (
        <label className="border block border-[#ABA6A6] p-3 relative rounded-md">
          <input
            ref={input}
            type="date"
            placeholder=""
            className="customized-date-input w-full outline-none"
            value={value}
            onChange={(e) => setValueFn(e.target.value)}
          />

          {/* Label */}
          <span
            className={clsx(
              "absolute z-10 left-3 leading-[12px] scale text-[#777] bg-[#FCFCFC] -translate-y-1/2 text-lg px-0 transition-all",
              isFocus ? "-top-[2px] px-2 scale-75" : "top-1/2"
            )}
          >
            {label}
          </span>

          {/* Hide placeholder */}
          {!isFocus && (
            <span className="absolute bg-[#FCFCFC] w-40 h-full left-1 top-0 "></span>
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
            value={value}
            onChange={(e) => setValueFn(e.target.value)}
          />

          {/* Label */}
          <span
            className={clsx(
              "absolute z-10 leading-[12px] scale text-[#777] bg-[#FCFCFC] -translate-y-1/2 text-lg px-0 transition-all",
              isFocus ? "-top-[2px] px-2 scale-75 left-2" : "top-1/2 left-3"
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
