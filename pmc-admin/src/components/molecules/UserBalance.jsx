import Icons from "../atoms/Icons";
import Send from "../organisms/Send";

const UserBalance = () => {
  return (
    <div className="border-b border-[rgba(179,_179,_179,_0.5)] pb-5">
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
        <div className="grid gap-3 justify-items-center">
          <button className="w-10 h-10 grid place-items-center rounded-full bg-[#874CF6]">
            <Icons type="receive" className="text-xl" />
          </button>
          <p className="font-medium">Receive</p>
        </div>

        {/* Swap */}
        <div className="grid gap-3 justify-items-center">
          <button className="w-10 h-10 grid place-items-center rounded-full bg-[#874CF6]">
            <Icons type="swap" className="text-2xl" />
          </button>
          <p className="font-medium">Swap</p>
        </div>

        {/* Send */}
        <Send />
      </div>
    </div>
  );
};

export default UserBalance;
