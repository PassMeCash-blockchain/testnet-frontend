import Image from "next/image";
import Modal from "../atoms/Modal";
import Cards from "../atoms/Cards";
import SectionSpacing from "../templates/SectionSpacing";
import Button from "../atoms/Button";

const UserModal = ({ type }) => {
  return (
    <Modal className={"p-3"}>
      <div className="grid justify-items-end pb-3">icon</div>
      <h3 className="font-medium text-xl py-3">Get Plastic Card</h3>
      <div className="grid justify-items-center content-center pt-5">
        <p className="text-base text-center pb-5">
          Request a free plastic card with a minimum <br></br>of #1000 and well
          deliver it to any location <br></br>of your choice.
        </p>
        <Cards>
          <div className="grid grid-cols-2 py-2 text-sm font-medium">
            <div>Crypto Card</div>
            <div className="justify-self-end">Card Details</div>
          </div>
          <hr className="w-full border"></hr>
          <div className="font-normal text-lg py-3">Card Name</div>
          <div className="grid grid-cols-4 font-semibold text-lg py-3">
            <div>3547</div>
            <div>3547</div>
            <div>3547</div>
            <div>3547</div>
          </div>
          <div className="grid grid-cols-2 text-[#ADADAD]">
            <p>Current Balance</p>
            <p className="justify-self-end">Expiry</p>
          </div>
          <div className="grid grid-cols-2 py-2">
            <p>STX 0.00</p>
            <p className="justify-self-end">18/24</p>
          </div>
        </Cards>
        <div className="w-full pt-8">
          <Button filled className={"w-full"}>
            Continue
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default UserModal;
