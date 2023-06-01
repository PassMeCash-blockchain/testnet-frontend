import Modal from "../templates/Modal";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useState } from "react";

const ScheduledSuccessful = () => {
  const [value, setValue] = useState("April 10, 2023");
  const option = ["April 10", "May 30", "March 30"];

  return (
    <Modal className={"p-10"}>
      <div className="grid grid-rows-[auto_1fr_auto_auto_auto] gap-4 bg-white py-10 px-5 w-[450px]">
        <div className="grid grid-cols-2">
          <p className="font-normal text-base">Scheduled successfully</p>
          <AiOutlineCloseCircle className="w-7 h-7 justify-self-end" />
        </div>

        <div className="bg-[#F2ECFE] py-3 grid grid-rows-[1fr_auto_1fr_1fr] justify-items-center">
          <Image
            src="/SVG/Bank_icon.svg"
            width={48}
            height={48}
            alt="transaction complete"
          />
          <p className="text-base text-[#0B011D]">Transfer to back account</p>
          <p className="font-semibold text-2xl text-[#0B011D]">+N450.00</p>
          <p className="text-[#FF0000] font-medium text-sm">Cancelled</p>
        </div>

        {/* Recipient details */}
        <div className="bg-[#F2ECFE] text-sm p-4 grid grid-rows-3 gap-3">
          {/* Recipient name */}
          <div className="grid grid-cols-2">
            <p className="text-[#0B011D]">Recipient name</p>
            <p className="justify-self-end font-medium text-[#0B011D]">
              Clement
            </p>
          </div>

          {/* Recipient Bank name */}
          <div className="grid grid-cols-2">
            <p className="text-[#0B011D]">Bank Name</p>
            <p className="justify-self-end font-medium text-[#0B011D]">
              Zenith Bank
            </p>
          </div>

          {/* Recipient account number  */}
          <div className="grid grid-cols-2">
            <p className="text-[#0B011D]">Account number</p>
            <p className="justify-self-end font-medium text-[#0B011D]">
              0938478654
            </p>
          </div>
        </div>

        {/* Scheduled payment details */}
        <div className="bg-[#F2ECFE] text-sm p-4 grid grid-rows-5 gap-3">
          <h4 className="font-semibold">Scheduled Payment</h4>

          {/* Amount */}
          <div className="grid grid-cols-2">
            <p className="text-[#0B011D]">Amount</p>
            <p className="justify-self-end font-medium text-[#0B011D]">
              N1,000
            </p>
          </div>

          {/* Frequency */}
          <div className="grid grid-cols-2">
            <p className="text-[#0B011D]">Frequency</p>
            <p className="justify-self-end font-medium text-[#0B011D]">
              Weekly every monday
            </p>
          </div>

          {/* End date  */}
          <div className="grid grid-cols-2">
            <p className="text-[#0B011D]">End date</p>
            <p className="justify-self-end font-medium text-[#0B011D]">
              2023/03/14, 1 time(s) in total
            </p>
          </div>

          {/* Time of activation  */}
          <div className="grid grid-cols-2">
            <p className="text-[#0B011D]">Time of activation</p>
            <p className="justify-self-end font-medium text-[#0B011D]">
              2023/03/14, 22:29:57
            </p>
          </div>
        </div>

        <button className="border border-[#874CF6] text-[#874CF6] p-3 rounded-lg w-full">
        Turn off scheduled payment
        </button>
      </div>
    </Modal>
  );
};

export default ScheduledSuccessful;
