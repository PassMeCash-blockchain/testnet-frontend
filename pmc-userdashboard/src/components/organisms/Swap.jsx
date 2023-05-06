import { useState } from "react";
import Icons, { ArrowIcon } from "../atoms/Icons";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import Modal from "../templates/Modal";
import Button from "../atoms/Button";
import Image from "next/image";

const Swap = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const [_isDropDown, _setIsDropDown] = useState(false);

  const options = ["BTC", "MATIC", "USDT"];

  return (
    <>
      <div
        onClick={() => setIsModalOpen((cur) => !cur)}
        className="grid gap-3 justify-items-center"
      >
        <button className="w-10 h-10 grid place-items-center rounded-full bg-[#874CF6]">
          <Icons type="swap" className="text-2xl" />
        </button>
        <p className="font-medium">Swap</p>
      </div>

      {isModalOpen && (
        <Modal>
          <div className="bg-white rounded-md p-5 w-full max-w-md">
            <div className="grid grid-rows-[auto_auto_auto_1fr_auto_auto_auto] gap-5 items-center ">
              <span
                className="grid place-items-center w-7 h-7 rounded-full bg-[#F5F5F5] cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                <Icons type="close" />
              </span>
              <h3 className="text-xl font-medium">
                How much do you want to convert?
              </h3>
              {/* swap from input */}
              <div>
                <p className="text-sm font-normal">Convert</p>
                <div className="grid grid-cols-[1fr_auto] gap-3">
                  <input
                    type="text"
                    className="p-2 bg-[#f5f5f5] w-full h-full"
                    placeholder={0.0}
                  />

                  {/* dropdown */}
                  <label
                    className="bg-[#f5f5f5] block p-4 relative rounded-md"
                    onClick={() => setIsDropDown(!isDropDown)}
                  >
                    <div className="grid grid-cols-[auto_1fr_auto] gap-1 items-center cursor-pointer">
                      <Image
                        src="/SVG/PolygonBadge.svg"
                        width={24}
                        height={24}
                      />
                      <p className="leading-[15px] text-sm font-normal">STR</p>
                      <div className="pr-3">
                        {isDropDown ? (
                          <IoMdArrowDropdown />
                        ) : (
                          <IoMdArrowDropright />
                        )}
                      </div>
                    </div>

                    {/* DropDown */}
                    {isDropDown && (
                      <div className="absolute bg-white z-50 top-14 left-0 w-full grid gap-2 p-3 rounded-md shadow-[0_0_5px_1px_rgba(0,0,0,0.1)]">
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
                </div>
              </div>
              {/* Swap Icon */}
              <Image
                src="/SVG/convert_button.svg"
                className="place-self-center"
                width={40}
                height={40}
              />
              {/* swap to icon */}
              <div>
                <p className="text-sm font-normal">To</p>
                <div className="grid grid-cols-[1fr_auto] gap-3">
                  <input
                    type="text"
                    className="p-2 bg-[#f5f5f5] w-full h-full"
                    placeholder={0.0}
                  />

                  {/* dropdown */}
                  <label
                    className="bg-[#f5f5f5] block p-4 relative rounded-md"
                    onClick={() => _setIsDropDown(!_isDropDown)}
                  >
                    <div className="grid grid-cols-[auto_1fr_auto] gap-1 items-center cursor-pointer">
                      <Image src="/SVG/ngNigeria.svg" width={24} height={24} />
                      <p className="leading-[15px] text-sm font-normal">NGN</p>
                      <div className="pr-3">
                        {_isDropDown ? (
                          <IoMdArrowDropdown />
                        ) : (
                          <IoMdArrowDropright />
                        )}
                      </div>
                    </div>

                    {/* DropDown */}
                    {_isDropDown && (
                      <div className="absolute bg-white z-50 top-14 left-0 w-full grid gap-2 p-3 rounded-md shadow-[0_0_5px_1px_rgba(0,0,0,0.1)]">
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
                </div>
              </div>
              {/* Exchange rate value */}
              <div className="text-sm">
                <span className="text-[#777]">Exchange Rate:</span> 1 STX =
                22,000 NGN
              </div>
              {/* button */}
              <div className="grid grid-cols-2 gap-3">
                <Button className="rounded-md" type="neutral">
                  Refresh
                </Button>
                <Button type="filled" filled>
                  Convert
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Swap;
