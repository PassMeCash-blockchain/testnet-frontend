import Icons from "../atoms/Icons";
import { conditionalClass } from "../atoms/libraries";

const VirtualCards = () => {
  const cards = [
    {
      type: "Naira",
      name: "Antony Abdulzaq",
      number: "0987 6543 0987 6543",
      expiryDate: "18/24",
      balance: "0.00",
      color: "#FFFFFF",
    },

    {
      type: "Crypto",
      name: "Antony Abdulzaq",
      number: "0987 6543 0987 6543",
      expiryDate: "18/24",
      balance: "0.00",
      color: "#1683E7",
    },
  ];
  return (
    <div className="mt-5 overflow-x-auto md:mt-10">
      {/* Cards */}
      <div className="grid grid-flow-col gap-5 w-max mx-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            className={conditionalClass(
              "border min-w-[300px] rounded-xl p-3",
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
        ))}

        <div className="grid grid-cols-[auto_auto] gap-3 min-w-[300px] place-content-center place-items-center border border-[rgba(179,_179,_179,_0.5)] rounded-xl min-h-44 text-[#392067]">
          <Icons type="plus" />
          <p>Create New Card</p>
        </div>
      </div>
    </div>
  );
};

export default VirtualCards;
