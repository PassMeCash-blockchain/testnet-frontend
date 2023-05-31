import { BsArrowLeft } from "react-icons/bs";
import { conditionalClass } from "./libraries";
import { useState } from "react";
import Icons, { ArrowIcon } from "./Icons";
import clsx from "clsx";
const Input = ({ onChange, className, type,children,placeholder,value,label,options, setValueFn }) => {
  const basicInputClasses = "bg-[#F5F5F5] rounded-md px-5 py-3";
  const [isDropDown, setIsDropDown] = useState(false);
  switch (type) {
    case "account":
      return (
        <div>
          <label className="font-bold text-secondaryColor">{children}</label>
          <input type="text" placeholder={placeholder} className={`${className} bg-inputColor border-none rounded-md w-1/2`} />
          <label className="font-semibold text-sm">{children}</label>
        </div>
       
      );
    
     case "select":
      return (
        <label
          className="border border-[#ABA6A6] block p-4 relative rounded-md"
          onClick={() => setIsDropDown(!isDropDown)}
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
              "absolute z-10 left-3 leading-[12px] text-[#777] bg-[#FCFCFC] top-1/2 -translate-y-1/2 text-lg px-0 transition-all",
              isDropDown && "-top-[2px] px-2",
              value !== "" && "-top-[2px] px-2"
            )}
          >
            {label}
          </span>
          {/* DropDown */}
          {isDropDown && (
            <div className="absolute bg-white z-50 top-14 left-0 w-full grid gap-2 p-3 rounded-md shadow-[0_0_5px_1px_rgba(0,0,0,0.1)]">
              <p>hi</p>
              {options?.map((option, i) => (
                <p
                  key={i}
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

    
    case "placeholder":
      return (
        <div>
          <label className="font-bold text-secondaryColor">{children}</label>
          <input type="text" placeholder={placeholder} className={`${className} bg-inputColor border-none rounded-md w-1/2`} />
        </div>
      );
    
      
    case "schedule":
        return (
        <label
          className="border border-[#ABA6A6] block p-4 relative rounded-md"
          onClick={() => setIsDropDown(!isDropDown)}
        >
            <div className="flex justify-between items-center cursor-pointer">
              <div className={`flex gap-3`}>
                 <Icons type="timer" />

                   <p className="leading-[15px]">{value}</p>
              </div>

              <div classsName="">
                    <div className="pr-3">
                      {isDropDown ? (
                        <ArrowIcon direction="down" />
                      ) : (
                        <ArrowIcon direction="right" />
                      )}
                    </div>
              </div>
           
          </div>

          {/* Label */}
          <span
            className={clsx(
              "absolute z-10 left-3 leading-[12px] text-[#777] bg-[#FCFCFC] top-1/2 -translate-y-1/2 text-lg px-0 transition-all",
              isDropDown && "-top-[2px] px-2",
              value !== "" && "-top-[2px] px-2"
            )}
          >
            {label}
          </span>
          {/* DropDown */}
          {isDropDown && (
            <div className="absolute bg-white z-50 top-14 left-0 w-full grid gap-2 p-3 rounded-md shadow-[0_0_5px_1px_rgba(0,0,0,0.1)]">
              <p>hi</p>
              {options?.map((option, i) => (
                <p
                  key={i}
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
      
    default:
      return (
        <div>
          <label className="font-bold text-secondaryColor">{children}</label>
          <input type="text" placeholder={placeholder} className={`${className} bg-inputColor border-none rounded-md w-1/2`} />
          <label className="font-semibold text-sm">{children}</label>
        </div>
       
      );
  }
};

export default Input;
