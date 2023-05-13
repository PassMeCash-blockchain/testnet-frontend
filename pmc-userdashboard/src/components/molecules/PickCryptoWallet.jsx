import Image from "next/image";

const PickCryptoWallet = ({ cryptoWallets, setSelectedWallet }) => {
  return (
    <div className="grid grid-flow-col gap-6 overflow-auto table-scroll pb-4">
      {cryptoWallets.map((cryptoWallet, i) => (
        <div
          key={i}
          className="p-4 rounded-md bg-[#F4F4F4] h-[200px] w-[281px] grid grid-rows-[1fr_auto]"
          onClick={() => setSelectedWallet(cryptoWallet)}
        >
          {/* Coin */}
          <div className="w-12 h-12 rounded-full overflow-hidden relative">
            <Image
              src={cryptoWallet.logo}
              width={1000}
              height={1000}
              alt="Crypto Icon"
            />
          </div>

          {/* Amount and Name of Crypto Wallet */}
          <div>
            {/* Amount */}
            <p className="font-semibold text-[40px]">
              {cryptoWallet.amount}.00
            </p>

            {/* Name of Crypto Wallet */}
            <p className="text-[#807A8B] font-medium">{cryptoWallet.coin}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PickCryptoWallet;
