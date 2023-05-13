import Button from "../atoms/Button";
import Modal from "../templates/Modal";
import Icons from "../atoms/Icons";

const DeliverCash = () => {
  return (
    <Modal>
      <div className="bg-white rounded-md px-5 pt-10 w-full max-w-md">
        <div className="grid grid-rows-[auto_auto_auto_1fr_auto_auto_auto] gap-5 items-center ">
          {/* <div> <Button type="back">back</Button></div> */}
          <button className="grid place-self-end">
            <Icons type="close" />
          </button>
          <div className="rounded-full h-28 w-28 bg-slate-300 grid place-self-center"></div>
          <h3 className="font-base text-lg grid place-self-center">
            Adeniyi Femiloya
          </h3>
          <div className="grid grid-cols-2 pt-10 px-8">
            <div className="text-[#B3B3B3]">
              <p>Amount</p>
              <p>Urgency</p>
              <p>Arival Time</p>
              <p>Phone</p>
              <p className="py-3">Status</p>
            </div>
            <div className="grid place-self-end font-semibold text-right">
              <p>NGN10,000</p>
              <p>Very Urgent</p>
              <p>3:00pm-3:34pm</p>
              <p>0903673836</p>
              <p className="py-3 text-[#F3AF0A]">Pending</p>
            </div>
          </div>
          <div className="grid gap-3 justify-items-stretch">
            <button className="border border-[#B3B3B3] p-3 rounded-lg">
              Yes, I have delivered the money
            </button>
            <button className="border border-[#874CF6] p-3 rounded-lg">
              No, I did not deliver the money
            </button>
            <button className="bg-[#874CF6] p-3 rounded-lg text-white">
              Confirm Transaction
            </button>
            <button className="p-3 text-[#EA4335] font-semibold">
              Confirm Request
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DeliverCash;
