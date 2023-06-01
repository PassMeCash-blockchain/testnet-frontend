import Modal from "../templates/Modal";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useState } from "react";

const CompletedPayment = () => {
  const [value, setValue] = useState("April 10, 2023");
  const option = ["April 10", "May 30", "March 30"];

  return (
    <Modal className={"p-10"}>
      <div className="grid grid-rows-[auto_auto] gap-4 bg-white py-10 px-5 w-[450px]">
      justify-self-center
        <div className="grid justify-self-center">
          <div className="relative h-32 w-32 grid justify-self-center py-3">
            <Image
              src="/assets/good-mark.svg"
              fill
              alt="transaction complete"
            />
          </div>
          <h1 className="text-center font-semibold pb-10 text-2xl">
            ALL DONE
          </h1>
          <p className="font-normal text-base text-center mb-2">
            We have scheduled a weekly payment transfer of NGN 500 to John
            Smith. We ‘ll send this transfer on April 10, 2023. You can cancel
            at anytime.
          </p>
          <div className="grid gap-3">
            <button className="text-white bg-[#874CF6] p-3 rounded-lg w-full">
            View receipt
            </button>
            <button className="border border-[#874CF6] text-[#874CF6] p-3 rounded-lg w-full">
            Share Receipt 
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CompletedPayment;
