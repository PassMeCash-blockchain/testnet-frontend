import { useState } from "react";
import Icons from "../atoms/Icons";
import SendBulkTransfer from "../molecules/SendBulkTransfer";
import SendToOtherBanks from "../molecules/SendToOtherBanks";
import SendToPassMeCashAcct from "../molecules/SendToPassMeCashAcct";
import SendTransferToBeneficiary from "../molecules/SendTransferToBeneficiary";
import SendViaQRcode from "../molecules/SendViaQRcode";
import Modal from "../templates/Modal";

const Send = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <div
        className="grid gap-3 justify-items-center"
        onClick={() => setIsModal(true)}
      >
        <button className="w-10 h-10 grid place-items-center rounded-full text-white bg-[#874CF6]">
          <Icons type="send" className="text-xl" />
        </button>
        <p className="font-medium">Send</p>
      </div>

      {isModal && (
        <Modal>
          <div className="bg-white rounded-md p-5 w-full max-w-md">
            <div className="grid grid-cols-[1fr_auto] gap-5 items-center ">
              <h3 className="text-center text-xl font-medium">Send</h3>
              <span
                className="grid place-items-center w-7 h-7 rounded-full bg-[#F5F5F5] cursor-pointer"
                onClick={() => setIsModal(false)}
              >
                <Icons type="close" />
              </span>
            </div>

            {/* Options */}
            <div className="mt-5 grid gap-5">
              <SendToPassMeCashAcct />
              <SendToOtherBanks />
              <SendBulkTransfer />
              <SendTransferToBeneficiary />
              <SendViaQRcode />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Send;
