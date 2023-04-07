import React from "react";
import InputField from "../atoms/InputField";
import Text from "../atoms/Text";
import Button from "../atoms/Button";

const Swap = () => {
  return (
    <div className="grid my-44 place-items-center">
      <div className="grid grid-cols-2">
        <div className="w-96">
          <div className="w-[400px]">
            <Text className="font-semibold text-4xl leading-[120%] tracking-[-0.005em] text-[#0B011D]">
              Swap crypto for cash quickly at a good rate.{" "}
            </Text>
            <Text className="mt-6 font-medium text-base leading-[140%] tracking-[0.015em] text-[#0B011D]">
              Quickly convert dozens of cryptocurrencies into your specific
              currency.
            </Text>
          </div>
          <div className="mt-12 mb-5 grid gap-5 grid-cols-2">
            <InputField
              type="text"
              className="w-[200px] px-5 py-2 h-12 rounded-md bg-[#F0F0F0]"
              placeholder="Amount |"
            />
            <InputField
              type="text"
              className="w-24 px-5 py-2 rounded-md bg-[#F0F0F0]"
            />
            <InputField
              type="text"
              className="w-[200px] px-5 py-2 h-12 rounded-md bg-[#F0F0F0]"
              placeholder="Convert | 12787799.68"
            />
            <InputField
              type="text"
              className="w-24 px-5 py-2 rounded-md bg-[#F0F0F0]"
            />
          </div>
          <Button></Button>
        </div>
        <div>Image</div>
      </div>
    </div>
  );
};

export default Swap;
