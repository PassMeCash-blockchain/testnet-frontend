import Button from "../atoms/Button";
import Modal from "../atoms/Modal";

const SendToMatic = () => {
  return (
    <Modal className={"p-3"}>
      <div>Icon</div>
      <h3 className="font-semibold text-2xl py-5">Send To Matic</h3>
      <div className="grid gap-2">
        <label>Address</label>
        <input
          type="text"
          placeholder="Paste address here"
          className="h-12 w-full bg-[#F5F5F5] p-3 rounded-md"
        />
      </div>
      <div className="grid gap-2 py-5">
        <label>Network</label>
        <select
          className="h-12 w-full bg-[#F5F5F5] p-3 rounded-md"
          placeholder=" Atomatically change network here"
        >
          <option value=""></option>
        </select>
      </div>
      <div className="grid gap-2">
        <label>Amount</label>
        <div className="grid grid-cols-2  gap-2">
          <input
            type="text"
            className="h-12 w-full bg-[#F5F5F5] p-3 rounded-md"
          />
          <select className="h-12 w-full bg-[#F5F5F5] p-3 rounded-md">
            <option value=""></option>
          </select>
        </div>
      </div>
      <div className="flex gap-2 pb-5">
        <p className="text-[#B3B3B3]">Available Amount: </p>
        <span>2.34 Matic</span>
      </div>
      <div className="grid grid-cols-2 bg-[#F2ECFE] p-3 rounded-md">
        <div>
          <p>Quantity</p>
          <p>Amount</p>
          <p>Network</p>
          <p>Total Amount</p>
        </div>
        <div className="grid justify-items-end">
          <p>0.05 MATIC</p>
          <p>500 NGN</p>
          <p>0.28 MATIC</p>
          <p className="font-semibold">500 NGN</p>
        </div>
      </div>
      <div className="p-10"></div>
      <div className="py-5">
        <Button filled className={"w-full"}>
          Send Fund
        </Button>
      </div>
    </Modal>
  );
};

export default SendToMatic;
