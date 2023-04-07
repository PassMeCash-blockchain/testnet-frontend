import React from "react";
import Text from "../atoms/Text";

const Coin = [
  "Stack",
  "Polygon",
  "Dogcoin",
  "Litecoin",
  "BUSD",
  "USDT",
  "Dogecoin",
  "Stack",
  "Polygon",
];

const TextSlider = () => {
  return (
    // text-wrapper
    <div className="flex justify-center overflow-hidden bg-neutral-100">
      {Coin.map((coin, i) => (
        <div key={i} className="my-5 mx-14">
          <Text className="font-normal text-4xl leading-[140%] tracking-[0.015em] text-[#0B011D] animate-moveRTL">
            {coin}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default TextSlider;
