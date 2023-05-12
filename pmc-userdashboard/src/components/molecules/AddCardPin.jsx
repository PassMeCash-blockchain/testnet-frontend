import { useRef } from "react";
import Icons from "../atoms/Icons";
import CardPinInput from "../atoms/CardPinInput";

const AddCardPin = () => {
  const otpInputs = [...Array(4).map(() => useRef(null))];
  return (
    <div className="mt-10">
      <p className="text-2xl font-thin italic text-center">
        Create a 4 digit pin
      </p>

      {/* Card Pin */}
      <div className="grid grid-flow-col w-max gap-8 mx-auto mt-16">
        {otpInputs.map((input, i) => (
          <CardPinInput key={i} inputRef={input} />
        ))}
      </div>

      <p className="text-center max-w-[324px] mx-auto mt-14">
        This pin will be used to perform transactions. Make sure it is typed in
        secret.
      </p>

      {/* CTAs */}
      <div className="grid grid-cols-2 max-w-[388px] mx-auto gap-4 mt-14">
        <button className="border border-[#874CF6] rounded-md px-5 py-3 text-[#874CF6] font-medium grid grid-cols-[auto_auto] gap-2 place-content-center place-items-center">
          <Icons type="arrow-left" className="text-xl" />
          <span>Back</span>
        </button>
        <button className="border border-[#874CF6] bg-[#874CF6] rounded-md px-5 py-3 text-[#fff] font-medium grid grid-cols-[auto_auto] gap-2 place-content-center place-items-center">
          <span>Next</span>
          <Icons type="arrow-right" className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default AddCardPin;
