import Button from "../atoms/Button";
import Modal from "../templates/Modal";
import Icons from "../atoms/Icons";

const RequestCash = () => {
  return (
    <Modal>
      <div className="bg-white rounded-md px-5 py-10 w-full max-w-md">
        <div className="grid grid-rows-[auto_auto_auto_1fr_auto_auto_auto] gap-5 items-center ">
          {/* <div> <Button type="back">back</Button></div> */}
          <button className="grid place-self-end">
            <Icons type="close" />
          </button>
          <div className="rounded-full h-28 w-28 bg-slate-300 grid place-self-center"></div>
          <h3 className="font-base text-lg grid place-self-center">
            Adeniyi Femiloya
          </h3>
          <div className="grid grid-cols-2 py-10 px-8">
            <div className="text-[#B3B3B3]">
              <p>Amount</p>
              <p>Urgency</p>
              <p>Arival Time</p>
            </div>
            <div className="grid place-self-end font-semibold text-right">
              <p>NGN10,000</p>
              <p>Very Urgent</p>
              <p>30mins/20km</p>
            </div>
          </div>
          <div className="grid gap-3 grid-cols-2 justify-items-stretch pt-5">
            <button className="bg-[#EBEBEB] p-3 rounded-lg text-[#999999]">
              Reject
            </button>
            <button className="bg-[#874CF6] p-3 rounded-lg text-white">
              Accept
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RequestCash;
