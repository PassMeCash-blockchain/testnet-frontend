import { useState } from "react";
import Image from "next/image";
import Icons from "../atoms/Icons";
import Modal from "../templates/Modal";
import PayWithBankTransfer from "../molecules/PayWithBankTransfer";
import PayWithCard from "../molecules/PayWithCard";
import ScanQrCode from "../molecules/ScanQrCode";
import Button from "../atoms/Button";

const Recieve = ({ walletType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const [_isDropDown, _setIsDropDown] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="grid gap-3 justify-items-center"
      >
        <button className="w-10 h-10 grid place-items-center rounded-full bg-[#874CF6]">
          <Icons type="receive" className="text-xl text-white" />
        </button>
        <p className="font-medium">Receive</p>
      </div>

      {isModalOpen &&
        (walletType === "naira" ? (
          // Naira Modal
          <Modal>
            <div className="bg-white rounded-md p-5 w-full max-w-md">
              <div className="grid grid-cols-[1fr_auto] gap-5 items-center ">
                <h3 className="text-center text-xl font-medium">Receive</h3>
                <span
                  className="grid place-items-center w-7 h-7 rounded-full bg-[#F5F5F5] cursor-pointer"
                  onClick={() => setIsModalOpen(false)}
                >
                  <Icons type="close" />
                </span>
              </div>

              {/* Account details and Payment type */}
              {/* <div className="grid grid-rows-[1fr_auto_auto_auto] gap-3"> */}
              <div className="mt-5 grid grid-cols-[1fr_auto] gap-5">
                <div>
                  <p className="text-sm text-[#b3b3b3] font-normal">
                    PassMeCash Account Number
                  </p>
                  <p className="text-2xl font-medium">0989887654</p>
                </div>
                <Image
                  src="/SVG/copy_icon.svg"
                  className="self-center"
                  width={32}
                  height={32}
                />
              </div>

              <div className="mt-14 grid grid-rows-3 gap-2">
                <PayWithBankTransfer />
                <PayWithCard />
                <ScanQrCode />
              </div>
            </div>
          </Modal>
        ) : (
          walletType === "crypto" && (
            // Crypto Modal
            <Modal>
              <div className="bg-white rounded-md p-5 w-full max-w-md h-screen max-h-[730px] overflow-y-auto">
                <div className="grid grid-cols-[1fr_auto] items-center">
                  <p className="text-center text-xl font-medium">
                    Receive Matic
                  </p>
                  <span
                    className="grid place-items-center w-7 h-7 rounded-full bg-[#F5F5F5] cursor-pointer"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <Icons type="close" />
                  </span>
                </div>

                {/* QR Code */}
                <div>
                  {/* Image */}
                  <div className="relative w-60 mx-auto">
                    <Image
                      src="/assets/qr-code.png"
                      width={1000}
                      height={1000}
                      alt="Q R Code"
                    />
                  </div>
                  <p className="text-center text-sm">
                    Send only USDT to this receive address
                  </p>
                </div>

                {/* Wallet Address */}
                <div className="mt-5">
                  <p className="text-neutral-400 text-sm sm:text-base">
                    Wallet Address
                  </p>
                  <div className="grid grid-cols-[1fr_auto] gap-10 mt-2">
                    <p className="break-all sm:text-lg">
                      1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNaTfTL5SLmv7DivfNa
                    </p>
                    <span>Copy Icon</span>
                  </div>
                </div>

                {/* Network */}
                <div className="mt-5">
                  <p className="text-neutral-400 text-sm sm:text-base">
                    Network
                  </p>
                  <div className="grid grid-cols-[1fr_auto] gap-10 mt-2">
                    <p className="sm:text-lg">BNB Smart Chain (BEP20)</p>
                    <span>Share Icon</span>
                  </div>
                </div>

                {/* Transaction Info */}
                <div className="mt-10 bg-[#F2ECFE] rounded-md p-3 grid gap-3">
                  {/* Minimum Deposit */}
                  <div className="grid grid-cols-[1fr_auto]">
                    <p className="text-sm sm:text-base">Minimum deposit</p>
                    <p className="font-medium text-sm sm:text-base">
                      0.29 MATIC
                    </p>
                  </div>
                  {/* Expected Arrival */}
                  <div className="grid grid-cols-[1fr_auto]">
                    <p className="text-sm sm:text-base">Expected arrival</p>
                    <p className="font-medium text-sm sm:text-base">
                      60 network confirmation
                    </p>
                  </div>
                </div>

                {/* BTN */}
                <Button filled type="filled" className="w-full mt-10">
                  Share
                </Button>
              </div>
            </Modal>
          )
        ))}
    </>
  );
};

export default Recieve;
