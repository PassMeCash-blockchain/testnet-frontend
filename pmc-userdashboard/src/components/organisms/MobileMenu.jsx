import Image from "next/image";

const MobileMenu = () => {
  return (
    <div className="px-10 py-5 shadow-[0px_-2px_14px_-5px_rgba(0,0,0,0.3)] md:hidden">
      {/* Mobile Nav */}
      <div className="text-center grid grid-cols-4 gap-2 text-[#B3B3B3] font-semibold text-xs">
        <div className="text-[#874CF6]">
          {/* Icon */}
          <p>Home</p>
        </div>
        <div>
          {/*Icon  */}
          <p>My wallet</p>
        </div>
        <div>
          {/* Icon */}
          <p>Card</p>
        </div>
        <div>
          {/* Icon */}
          <p>Transactions</p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
