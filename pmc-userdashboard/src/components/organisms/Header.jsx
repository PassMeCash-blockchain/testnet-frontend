import Image from "next/image";

const Header = () => {
  return (
    <div className="px-10 py-5 shadow-[0px_-2px_14px_-5px_rgba(0,0,0,0.3)] grid grid-cols-[auto_1fr_auto] gap-10">
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
      <div className="text-center">Navs</div>

      {/* Notification and Settings */}
      <div>notifi and settings</div>
    </div>
  );
};

export default Header;
