import Image from "next/image";
import Icons from "../atoms/Icons";
import { useState } from "react";
import Modal from "../templates/Modal";
import Button from "../atoms/Button";

const SendToPassMeCashAcct = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <div
        className="grid grid-cols-[auto_1fr_auto] gap-5 p-3 rounded-md items-center bg-[#F5F5F5] cursor-pointer"
        onClick={() => setIsModal(true)}
      >
        {/* Logo */}
        <div className="w-10">
          <Image
            src="/assets/pmc-logo.png"
            width={1000}
            height={1000}
            alt="Logo"
          />
        </div>

        {/* Title */}
        <p>To PassMeCash Account</p>

        {/* Arrow */}
        <Icons type="right" className="text-lg" />
      </div>

      {/* MOdal */}
      {isModal && (
        <Modal>
          <div className="bg-white w-full max-w-md rounded-md p-5">
            {/* Close */}
            <span
              className="grid place-items-center w-7 h-7 rounded-full bg-[#F5F5F5] cursor-pointer ml-auto"
              onClick={() => setIsModal(false)}
            >
              <Icons type="close" />
            </span>

            {/* Title */}
            <h3 className="text-xl font-medium text-center">
              Send To PMC Account
            </h3>

            {/* Inputs */}
            <div className="mt-10 grid gap-5">
              {/* Account Number */}
              <div className="grid gap-2">
                <label htmlFor="pmcAcctNumber">Account Number</label>
                <input
                  type="text"
                  id="pmcAcctNumber"
                  placeholder="Enter your account number"
                  className="border border-[#ABA6A6] bg-[#F5F5F5] rounded-md py-3 px-5 outline-none"
                />

                {/* Reciever */}
                <div className="grid grid-cols-[auto_1fr] items-center gap-2 text-[#874CF6]">
                  <Icons type="check-circle" />
                  <p>Clement Friday</p>
                </div>
              </div>

              {/* Amount */}
              <div className="grid gap-2 ">
                <label htmlFor="amount">Amount</label>
                <label className="grid grid-cols-[auto_1fr] items-center border border-[#ABA6A6] bg-[#F5F5F5] rounded-md p-3 gap-3">
                  <Icons type="naira" className="text-lg" />
                  <input
                    type="number"
                    id="amount"
                    placeholder="Enter amount in naira"
                    className="bg-transparent outline-none"
                  />
                </label>
              </div>

              {/* Schedule Payment */}
              <div className="grid grid-cols-[auto_1fr] gap-3 items-center mt-2 bg-[#F5F5F5] rounded-md py-3 px-5">
                <Icons type="schedule" className="text-xl text-[#49536E]" />
                <p className="text-[#0B011D]">Schedule Payment </p>
              </div>

              {/* Save As Beneficiary */}
              <div className="grid grid-cols-[1fr_auto] gap-5 items-center mt-2 bg-[#F5F5F5] rounded-md py-3 px-5">
                <p className="text-[#0B011D]">Save as Beneficiary </p>

                <div className="w-8 h-4 px-1 py-[2px] rounded-full border-2 border-[#49536E] cursor-pointer">
                  <span className="block w-2 h-2 rounded-full border-2 border-[#49536E] "></span>
                </div>
              </div>

              {/* BTN */}
              <button className="bg-[#874CF6] text-white text-center py-3 rounded-md font-medium mt-5">
                Send Fund
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SendToPassMeCashAcct;
