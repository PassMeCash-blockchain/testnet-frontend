import { clsxes, Texts, Images, Buttons } from "../atoms/libraries";
import InputField from "../atoms/InputField";

export const Cards = ({ type, switchCoin }) => {
  switch (type) {
    case "balance":
      return (
        <div className="grid grid-rows-4 gap-3 p-10 border-2 border-[linear-gradient(0deg, #FCFCFC, #FCFCFC),linear-gradient(0deg, rgba(179, 179, 179, 0.5), rgba(179, 179, 179, 0.5))]">
          <div className={clsxes(switchCoin && "grid grid-cols-2")}>
            <Texts className="text-xl font-semibold text-[#B3B3B3]">
              Your balance
            </Texts>

            {/* create a component for switch Input */}
            {switchCoin && (
              <Buttons className="w-[110px] justify-self-end">Matic</Buttons>
            )}
          </div>

          <Texts className="text-5xl font-semibold text-[#0B011D]">
            NGN 0.00
          </Texts>
          <div className="flex items-center">
            <Images
              src="/SVG/Equivalent.svg"
              alt="Equivalent"
              width={10}
              height={6}
            />
            <Texts className="text-xl font-semibold text-[#B3B3B3]">
              0.0 USD
            </Texts>
          </div>

          <div className="grid grid-cols-2 gap-3 w-[350px]">
            <Buttons>Fund Account</Buttons>
            <Buttons>Withdraw</Buttons>
          </div>
        </div>
      );

    case "convert":
      return (
        <div className="grid grid-rows-4 gap-3 p-10 border-2 border-[linear-gradient(0deg, #FCFCFC, #FCFCFC),linear-gradient(0deg, rgba(179, 179, 179, 0.5), rgba(179, 179, 179, 0.5))]">
          <Texts className="text-xl font-semibold text-[#000]">
            Convert Cryptocurrency
          </Texts>

          <label>
            <Texts className="text-sm font-normal w-full mb-2">
              You are converting
            </Texts>
            <div className="grid grid-cols-3 gap-3">
              <InputField
                type="number"
                className="bg-[#F5F5F5] outline-none p-3 col-span-2"
              />
              <Buttons className="h">Matic</Buttons>
            </div>
          </label>

          {/* convert Icon */}
          <Images
            src="/SVG/convert_button.svg"
            alt="Equivalent"
            width={40}
            height={40}
            className="self-center"
          />

          {/* review input */}
          <label>
            <Texts className="text-sm font-normal w-full mb-2">
              You will receive
            </Texts>
            <div className="grid grid-cols-3 gap-3">
              <InputField
                type="number"
                className="bg-[#F5F5F5] outline-none p-3 col-span-2"
              />
              <Buttons className="h">NGN</Buttons>
            </div>
          </label>

          <Texts className="font-normal text-sm">
            Exchange Rate: 1 STX = 22,000 NGN
          </Texts>
          <div className="grid grid-cols-2 gap-3">
            <Buttons>Refresh</Buttons>
            <Buttons filled>Convert</Buttons>
          </div>
        </div>
      );

    case "crypto_balance":
      return (
        <div className="grid grid-rows-2 gap-16 p-4 border-2 border-[linear-gradient(0deg, #FCFCFC, #FCFCFC),linear-gradient(0deg, rgba(179, 179, 179, 0.5), rgba(179, 179, 179, 0.5))]">
          <Images
            src="/SVG/PolygonBadge.svg"
            width={56}
            height={56}
            alt="avalable crypto on PMC"
          />

          <div>
            <Texts className="text-5xl font-semibold text-[#0B011D]">
              0.00
            </Texts>
            <Texts className="text-base font-medium text-[#B3B3B3]">
              MATIC
            </Texts>
          </div>
        </div>
      );

    default:
      return <h6 className={clsxes("text-xs", className)}>{children}</h6>;
  }
};
