import Modal from "../templates/Modal";
import Icons from "../atoms/Icons";

const ConfirmCash = () => {
  return (
    <Modal>
      <div className="bg-white rounded-md px-5 pt-10 w-full max-w-md">
        <div className="grid grid-rows-[auto_auto_auto_1fr_auto_auto_auto] gap-5 items-center ">
          <button className="grid place-self-end">
            <Icons type="close" />
          </button>
          <h3 className="font-semibold text-lg grid place-self-center">
            Confirm Transaction
          </h3>
          <p className="text-center text-sm pb-3">
            Please confirm this transaction if you have delivered the money
            <br></br> or not so we can refund. Thank you.
          </p>
          <div className="grid gap-3 justify-items-stretch pb-10">
            <button className="border border-[#B3B3B3] p-3 rounded-lg">
              Yes, I have delivered the money
            </button>
            <button className="border border-[#874CF6] p-3 rounded-lg">
              No, I did not deliver the money
            </button>
          </div>
          <button className="bg-[#874CF6] p-3 rounded-lg text-white">
            Confirm Transaction
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmCash;
