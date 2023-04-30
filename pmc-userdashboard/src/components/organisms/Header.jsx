import Image from "next/image";

const Header = () => {
  return (
    <div className="px-10 py-5 shadow-[0px_-2px_14px_-5px_rgba(0,0,0,0.3)] grid md:grid-cols-[auto_auto_auto] grid-cols-[auto_1fr] gap-10 font-normal text-base">
      {/* Logo */}
      <div className="w-20">
        <Image
          src="/assets/pmc-logo.png"
          width={1000}
          height={1000}
          alt="Logo"
        />
      </div>

      {/* Nav */}
      <div className="text-center hidden md:grid grid-cols-[auto_auto_auto_auto] gap-1 text-[#B3B3B3]">
        <div className="text-[#874CF6]">Home</div>
        <div>My wallet</div>
        <div>Card</div>
        <div>Transactions</div>
      </div>

      {/* Notification and Settings */}
      <div className="justify-self-end grid md:grid-cols-2 md:gap-5">
        <div>Notifications</div>
        <div className="hidden md:block">
          {/* Icon */}
          Settings
        </div>
      </div>
    </div>
  );
};

export default Header;
