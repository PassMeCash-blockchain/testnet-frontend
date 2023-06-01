import Modal from "../templates/Modal";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useState } from "react";

const SchedulePayment = () => {
  const [value, setValue] = useState("April 10, 2023");
  const option = ["April 10", "May 30", "March 30"];

  return (
    <Modal className={"p-10"}>
      <div className="grid grid-rows-[auto_auto] gap-4 bg-white py-10 px-5 w-[450px]">
        <AiOutlineCloseCircle className="w-7 h-7 justify-self-end" />
        <div>
          <div>
            <h3 className="font-semibold text-2xl py-5">Scheduled Payment</h3>
            <Input
              type="select"
              value={value}
              options={option}
              setValueFn={setValue}
            />
          </div>
          <div>
            <p className="font-normal text-base py-2">Repeats</p>
            <Input
              type="select"
              value={value}
              options={option}
              setValueFn={setValue}
            />
          </div>

          {/* select a frequency */}
          <div>
            <p className="font-normal text-base py-2">Select a frequency</p>
            <Input
              type="select"
              value={value}
              options={["Today", "2 days from today"]}
              setValueFn={setValue}
            />
          </div>

          {/* Select an End date */}
          <div>
            <p className="font-normal text-base py-2">Select an end Date</p>
            <Input
              type="select"
              value={value}
              options={["Today", "2 days from today"]}
              setValueFn={setValue}
            />
          </div>
          <div className="w-full pt-8 grid grid-cols-2 gap-3">
            <Button type="filled" filled className="w-full">
              Continue
            </Button>
            <Button type="neutral" filled className="w-full">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SchedulePayment;
