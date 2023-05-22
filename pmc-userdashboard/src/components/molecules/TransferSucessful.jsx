import Icons from "../atoms/Icons";
import Image from "next/image";
const TransferSucessful = () => {
  return (
    <div className="grid place-items-center self-center">
      <div className=" w-1/3 grid border border-blacks p-3 h-full ">
        <Icons type="cancel" className="h-32 w-32 grid items-start" />
        <div className="grid justify-self-center">
          <div className="relative h-32 w-32 grid justify-self-center pb-6">
            <Image
              src="/assets/good-mark.svg"
              fill
              alt="transaction complete"
            />
          </div>
          <h1 className="text-center font-semibold pb-14 text-2xl pt-5">
            Transfer successful
          </h1>
        </div>
        <div className="w-full grid gap-3 items-end  pt-10">
          <button className="text-white bg-[#874CF6] p-3 rounded-lg">
            Make a new bulk transfer
          </button>
          <button className="text-[#874CF6] border border-[#874CF6] p-3 rounded-lg">
            View all reciept
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferSucessful;
