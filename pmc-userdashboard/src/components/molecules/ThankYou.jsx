import Modal from "../templates/Modal";
import Icons from "../atoms/Icons";
import Button from "../atoms/Button";
import Image from "next/image";

const ThankYou = () => {
  return (
    <Modal>
      <Icons type="cancel" className="h-32 w-32 grid items-end" />
      <div className="grid justify-self-center">
        <div className="relative h-32 w-32 grid justify-self-center py-3">
          <Image src="/assets/good-mark.svg" fill alt="transaction complete" />
        </div>
        <h1 className="text-center font-semibold pb-10 text-2xl">
          Transfer Successful
        </h1>
        <div className="w-full">
          <button className="text-white bg-[#874CF6] p-3 rounded-lg">
            Make a new bulk transfer
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ThankYou;
