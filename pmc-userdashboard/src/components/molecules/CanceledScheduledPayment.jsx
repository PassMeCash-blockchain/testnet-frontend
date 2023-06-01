import Modal from "../templates/Modal";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useState } from "react";

const CanceledScheduledPayment = () => {
  const [value, setValue] = useState("April 10, 2023");
  const option = ["April 10", "May 30", "March 30"];

  return (
    <Modal className={"p-10"}>
      <div className="grid grid-rows-[auto_auto_1fr_auto] justify-self-center gap-4 bg-white py-10 px-5 w-[450px]">
        <AiOutlineCloseCircle className="w-7 h-7 justify-self-end" />
        <h1 className="text-center font-semibold pb-10 text-2xl">
          Cancel scheduled payment
        </h1>
        <p className="font-normal text-base text-center mb-2">
          Are you sure you want to cancel this payment?
        </p>
        <div className="grid grid-cols-2 gap-3">
          <button className="text-[#999999] bg-[#EBEBEB] p-3 rounded-lg w-full">
            Cancel
          </button>
          <button className="bg-[#874CF6] text-white p-3 rounded-lg w-full">
            Confirm
          </button>
        </div>

        <div className=" grid grid-cols-[auto_1fr] gap-1 justify-center">
          <Image
            src="/SVG/info-circle.svg"
            width={16}
            height={16}
            alt="Info circle"
          />

          <p className="font-light text-xs text-center">
            Note: once is turn off you won’t be able to longer execute after
            deactivation.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default CanceledScheduledPayment;
