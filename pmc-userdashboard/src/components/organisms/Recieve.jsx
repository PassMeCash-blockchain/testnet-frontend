import { useState } from "react";
import Image from "next/image";
import Icons from "../atoms/Icons";
import Modal from "../templates/Modal";
import PayWithBankTransfer from "../molecules/PayWithBankTransfer";
import PayWithCard from "../molecules/PayWithCard";
import ScanQrCode from "../molecules/ScanQrCode";

const Recieve = () => {
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
          <Icons type="receive" className="text-xl" />
        </button>
        <p className="font-medium">Receive</p>
      </div>

      {isModalOpen && (
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

            {/* </div> */}
          </div>
        </Modal>
      )}
    </>
  );
};

export default Recieve;
