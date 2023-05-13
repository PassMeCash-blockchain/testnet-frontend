import Icons from "../atoms/Icons";
import { useState } from "react";
import Modal from "../templates/Modal";
import Image from "next/image";
import Button from "../atoms/Button";

const PayWithBankTransfer = () => {
  const [isModal, setIsModal] = useState(false);
  // const [isSubModalOpen, setIsSubModalOpen] = useState(false);
  return (
    <>
      <div className="grid grid-cols-[40px_1fr_auto] gap-5 p-3 rounded-md items-center bg-[#F5F5F5]">
        {/* Logo */}
        <Image src="/SVG/Bank_icon.svg" width={32} height={32} />

        {/* Title */}
        <p>Pay with Bank transfer</p>

        {/* Arrow */}
        <div className="cursor-pointer" onClick={() => setIsModal(true)}>
          <Icons type="right" className="text-lg" />
        </div>
      </div>

      {/* MOdal */}
      {isModal && (
        <Modal>
          <div className="bg-white rounded-md p-5 w-full max-w-md">
            <div className="grid grid-cols-[1fr_auto] gap-5 items-center ">
              <h3 className="text-center text-xl font-medium">Receive</h3>
              <span
                className="grid place-items-center w-7 h-7 rounded-full bg-[#F5F5F5] cursor-pointer"
                onClick={() => setIsModal(false)}
              >
                <Icons type="close" />
              </span>
            </div>

            <div className="grid grid-rows-[auto_auto_auto_auto_1fr] gap-4">
              {/* Add Name on card */}
              <div>
                <p className="text-sm font-normal">Name on card</p>
                <input
                  type="text"
                  className="p-3 bg-[#f5f5f5] w-full"
                  placeholder="Type in the name on the card"
                />
              </div>

              {/* Add Card number */}
              <div>
                <p className="text-sm font-normal">Card Number</p>
                <input
                  type="number"
                  className="p-3 bg-[#f5f5f5] w-full"
                  placeholder="1111 2222 3333 4444"
                />
              </div>

              {/* Expiry date and CCV */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-normal">Expiry Date</p>
                  <input type="date" className="p-3 bg-[#f5f5f5] w-full" />
                </div>
                <div>
                  <p className="text-sm font-normal">CCV</p>
                  <input
                    type="number"
                    className="p-3 bg-[#f5f5f5] w-full"
                    placeholder={111}
                  />
                </div>
              </div>

              {/* Add Amount */}
              <div>
                <p className="text-sm font-normal">Amount</p>
                <input
                  type="number"
                  className="p-3 bg-[#f5f5f5] w-full"
                  placeholder="N9,973"
                />
              </div>

              {/* Recieve */}
              <Button type="filled" filled>
                Recieve
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default PayWithBankTransfer;
