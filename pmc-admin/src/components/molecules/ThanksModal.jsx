import Modal from "../atoms/Modal";
import Button from "../atoms/Button";
const ThanksModal = () => {
  return (
    <Modal className={"p-10"}>
      <div className="grid justify-items-end pb-3">icon</div>
      <div className="grid justify-items-center">
        <div className="rounded-full h-36 w-36 bg-[#874CF6]"></div>
        <h3 className="font-semibold text-2xl py-5">Thank you!</h3>
        <p className="pb-10 text-justify">
          Your request has been made, card will <br></br>
          be delivered to the location you entered.
        </p>
        <div className="w-full pt-8">
          <Button filled className={"w-full"}>
            Okay
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ThanksModal;
