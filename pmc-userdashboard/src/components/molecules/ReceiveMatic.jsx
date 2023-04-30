import Icons from "../atoms/Icons";
import Modal from "../atoms/Modal";

const ReceiveMatic = () => {
  return (
    <Modal className={"p-3"}>
      <Icons type="cancel" />
      <div className="grid grid-cols-2 py-5">
        <h3 className="font-semibold text-2xl py-5">Receive Matic</h3>
        <div className="grid justify-self-end">icon</div>
      </div>
      <div className="h-20 w-full bg-slate-300">Barcode</div>
      <p>Send only USDT to this receive address</p>
    </Modal>
  );
};

export default ReceiveMatic;
