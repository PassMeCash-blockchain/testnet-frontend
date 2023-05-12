import Icons from "../atoms/Icons";
import { useState } from "react";
import Modal from "../templates/Modal";

const SendViaQRcode = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <div className="grid grid-cols-[40px_1fr_auto] gap-5 p-3 rounded-md items-center bg-[#F5F5F5]">
        {/* Logo */}
        <Icons
          type="QRcode"
          className="text-3xl text-[#874CF6] justify-self-center"
        />

        {/* Title */}
        <p>Scan QR Code</p>

        {/* Arrow */}
        <Icons type="right" className="text-lg" />
      </div>

      {/* MOdal */}
      {isModal && (
        <Modal>
          <p className="bg-white">Modal</p>
        </Modal>
      )}
    </>
  );
};

export default SendViaQRcode;
