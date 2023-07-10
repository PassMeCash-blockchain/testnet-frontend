import React from "react";
import Recieve from "../organisms/Recieve";
import Swap from "../organisms/Swap";
import Send from "../organisms/Send";
import Icons from "../atoms/Icons";
import Image from "next/image";

function SelectedCryptoWallet({ selectedWallet, setSelectedWallet }) {
  return (
    <div className="bg-[#F4F4F4] p-5 rounded-md">
      {/* Coin and Close BTN */}
      <div className="flex justify-between">
        {/* Coin */}
        <div className="w-12 h-12 rounded-full overflow-hidden relative">
          <Image
            src="/assets/PolygonBadge.svg"
            width={1000}
            height={1000}
            alt="Crypto Icon"
          />
        </div>

        {/* Close BTN */}
        <button
          className="rounded-full w-7 h-7 bg-[rgba(255,255,255,0.7)] grid place-items-center"
          onClick={() => setSelectedWallet({})}
        >
          <Icons type="close" className="text-lg" />
        </button>
      </div>

      {/* Crypto Balance */}
      <div className="mt-5">
        <p className="font-semibold text-[22px]">{selectedWallet.coin}</p>
        <p className="text-4xl font-semibold leading-[30px]">
          {selectedWallet.amount}.00
        </p>
      </div>

      {/* CTAs */}
      <div className="grid grid-cols-[auto_auto_auto] gap-10 w-max mt-5">
        {/* Receive */}
        <Recieve walletType="crypto" />

        {/* Swap */}
        {/* <Swap /> */}

        {/* Send */}
        <Send />
      </div>
    </div>
  );
}

export default SelectedCryptoWallet;
