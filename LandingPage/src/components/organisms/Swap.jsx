import React from "react";
import InputField from "../atoms/InputField";
import Text from "../atoms/Text";
import { Images } from "../atoms/libraries";
import Button from "../atoms/Button";

const Swap = () => {
  return (
    <div className="grid my-44 place-content-center">
      <div className="grid lg:grid-cols-2">
        <div className="w-[380px]">
          <div className="lg:w-full">
            <Text className="font-semibold text-4xl leading-[120%] tracking-[-0.005em] text-[#0B011D]">
              Swap crypto for cash quickly at a good rate.{" "}
            </Text>
            <Text className="mt-6 font-medium text-base leading-[140%] tracking-[0.015em] text-[#0B011D]">
              Quickly convert dozens of cryptocurrencies into your specific
              currency.
            </Text>
          </div>
          <div className="mt-12 w-full mb-5 grid gap-4 grid-cols-3">
            <InputField
              type="text"
              className="w-full px-5 py-2 h-12 rounded-md bg-[#F0F0F0] col-span-2"
              placeholder="Amount |"
            />
            <select className="w-full justify-self-start text-center rounded-md bg-[#F0F0F0]">
              <option value="volvo">USDT</option>
              <option value="saab">STR</option>
              <option value="fiat">STR</option>
            </select>
            <InputField
              type="text"
              className="w-full px-5 py-2 h-12 rounded-md bg-[#F0F0F0] col-span-2"
              placeholder="Convert | 12787799.68"
            />
            <select className="w-full text-center rounded-md bg-[#F0F0F0]">
              <option value="volvo">NGN</option>
              <option value="saab">STR</option>
              <option value="fiat">STR</option>
            </select>
          </div>
          <Button filled className="w-full">
            Exchange now
          </Button>
        </div>
        <div className="lg:grid place-content-center hidden">
          <Images
            className="hidden lg:inline-block"
            src={`/assets/rocket.png`}
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Swap;
