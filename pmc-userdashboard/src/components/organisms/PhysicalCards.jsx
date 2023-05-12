import Icons from "../atoms/Icons";
import { conditionalClass } from "../atoms/libraries";

const PhysicalCards = ({ navs, cardState, setCardState }) => {
  const card = {
    type: "Naira",
    name: "Antony Abdulzaq",
    number: "0987 6543 0987 6543",
    expiryDate: "18/24",
    balance: "0.00",
    color: "#FFFFFF",
  };
  return (
    <div className="mt-5 md:mt-10">
      <p className="text-center text-2xl font-medium">Get Plastic Card</p>
      <p className="mt-10 text-center max-w-lg mx-auto text-lg text-neutral-500">
        Request a free Crypto Plastic Card{" "}
        <span className="font-medium text-[#000000]">
          with a minimum of NGN1,000
        </span>{" "}
        and we’ll deliver it to any location of your choice.
      </p>

      {/* Card */}
      <div
        className={conditionalClass(
          "border min-w-[300px] rounded-xl p-3 max-w-xs mx-auto mt-10",
          card.color !== "#FFFFFF" && "text-white"
        )}
        style={{ background: card.color }}
      >
        {/* Card Type and Card Details BTN */}
        <div
          className={conditionalClass(
            "flex justify-between items-center pb-3 border-b",
            card.color !== "#FFFFFF" && "border-[rgba(255,255,255,0.4)]"
          )}
        >
          {/* Card Type */}
          <p className="text-xs">{card.type} Card</p>

          {/* Card Details BTN */}
          <button
            className={conditionalClass(
              "flex space-x-2 items-center bg-neutral-200 rounded-sm px-3 py-1 text-xs",
              card.color !== "#FFFFFF" && "bg-[rgba(255,255,255,0.3)]"
            )}
          >
            <span>Card Details</span>
            <Icons type="arrow-right" />
          </button>
        </div>

        {/* Card Name */}
        <p className="text-lg my-2">{card.name}</p>

        {/* Card Number */}
        <div className="flex justify-between items-center">
          {card.number.split(" ").map((num, i) => (
            <p key={i} className="text-2xl">
              {num}
            </p>
          ))}
        </div>

        {/* Current Balance and Expiry Date */}
        <div className="flex justify-between items-center mt-3 text-xs">
          {/* Current Balance */}
          <div className="grid gap-1">
            <p className="opacity-80">Current Balance</p>
            <p className="font-semibold">NGN 0.00</p>
          </div>

          {/* Expiry Date */}
          <div className="grid gap-1">
            <p className="opacity-80">Expiry</p>
            <p className="font-semibold">18/24</p>
          </div>
        </div>
      </div>

      {/* Recieve Address  */}
      <div>
        <p className="text-center mt-10">
          Enter address you want card delivered to
        </p>
        <input
          type="text"
          placeholder="Enter your address"
          className="px-5 py-3 outline-none border border-[#3F3F3F] rounded-md w-full max-w-xl mx-auto block mt-5"
        />
      </div>

      {/* CTA */}
      <button className="px-5 py-3 text-center text-white rounded-md block w-full max-w-xl mx-auto mt-10 bg-[#874CF6]">
        Get Plastic Card
      </button>
    </div>
  );
};

export default PhysicalCards;
