import Icons from "../atoms/Icons";
import Send from "../organisms/Send";
import Swap from "../organisms/Swap";
import Recieve from "../organisms/Recieve";

const UserBalance = () => {
  return (
    <div className=" pb-5">
      <p className="text-[#807A8B] font-medium">Your balance</p>
      {/* Amount */}
      <div className="mt-3 grid grid-cols-[auto_auto_auto] gap-2 items-center w-max">
        <p className="text-2xl leading-[18px]">₦</p>
        <p className="text-4xl font-semibold leading-[30px  ]">0.00</p>
        <div className="text-2xl bg-[#F2ECFE] rounded-full pt-[3px] w-7 h-7 grid place-items-center">
          <Icons type="down" />
        </div>
      </div>

      {/* CTAs */}
      <div className="grid grid-cols-[auto_auto_auto] gap-10 w-max mt-5">
        {/* Receive */}
        <Recieve />

        {/* Swap */}
        <Swap />

        {/* Send */}
        <Send />
      </div>
    </div>
  );
};

export default UserBalance;
