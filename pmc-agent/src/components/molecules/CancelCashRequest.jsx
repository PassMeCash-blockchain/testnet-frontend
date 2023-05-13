import Modal from "../templates/Modal";
import Icons from "../atoms/Icons";

const CancelCashRequest = () => {
  return (
    <Modal>
      <div className="bg-white rounded-md px-5 pt-10 w-full max-w-md">
        <div className="grid grid-rows-[auto_auto_auto_1fr_auto_auto_auto] gap-5 items-center ">
          <button className="grid place-self-end">
            <Icons type="close" />
          </button>
          <h3 className="font-semibold text-lg grid place-self-center">
            Cancel Request
          </h3>
          <p className="text-center text-sm">
            Are you sure you want to cancel this request?
          </p>
          <div className="grid gap-3 grid-cols-2 justify-items-stretch">
            <button className="bg-[#EBEBEB] p-3 rounded-lg text-[#999999]">
              Yes, I want to
            </button>
            <button className="bg-[#874CF6] p-3 rounded-lg text-white">
              No, I dont
            </button>
          </div>
          <div className="flex gap-3 pt-10">
            <div>icon</div>
            <p className="text-center">
              Note: once request is cancelled you wont be able to deliver the
              money requested for
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CancelCashRequest;
