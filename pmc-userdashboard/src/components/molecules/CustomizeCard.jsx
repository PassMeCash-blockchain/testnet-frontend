import Button from "../atoms/Button";
import Icons from "../atoms/Icons";
import { conditionalClass } from "../atoms/libraries";

const CustomizeCard = () => {
  const cardColorOptions = ["#FCFCFC", "#15E811", "#1683E7", "#130231"];
  const card = {
    name: "Antony Abdulzaq",
    number: "0987 6543 0987 6543",
    expiryDate: "18/24",
    balance: "0.00",
  };
  return (
    <div className="mt-10">
      {/* Pick a Color */}
      <div className="grid gap-6">
        <p className="text-center">Pick a color to customize your card</p>
        <div className="grid grid-flow-col w-max mx-auto gap-3">
          {cardColorOptions.map((color, i) => (
            <span
              key={i}
              className="w-5 h-5 block border border-[#0B011D] rounded-full"
              style={{ background: color }}
            ></span>
          ))}
        </div>
      </div>

      {/* Card Details*/}
      <div className="max-w-[388px] mx-auto mt-8 border border-[rgba(179,_179,_179,_0.5)] p-5 rounded-2xl">
        {/* Card Name Input */}
        <input
          type="text"
          placeholder="Enter card name"
          className="bg-[#F5F5F5] text-[] rounded-md px-5 py-3 w-full outline-none"
        />

        {/* Card Number */}
        <div className="flex justify-between border-b border-[#B3B3B3] mt-7 pb-4">
          {card.number.split(" ").map((num, i) => (
            <p key={i} className="text-2xl">
              {num}
            </p>
          ))}
        </div>

        {/* Current Balance and Expiry Date */}
        <div className="flex justify-between mt-7">
          {/* Current Balance */}
          <div>
            <p className="text-sm">Current Balance</p>
            <p className="font-semibold">NGN {card.balance}</p>
          </div>

          {/* Current Balance */}
          <div>
            <p className="text-sm">Expiry</p>
            <p className="font-semibold">{card.expiryDate}</p>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="grid grid-cols-2 max-w-[388px] mx-auto gap-4 mt-10">
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

export default CustomizeCard;
