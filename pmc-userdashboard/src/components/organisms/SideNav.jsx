import Image from "next/image";

const SideNav = () => {
  return (
    <div className="bg-[#874CF6] w-full p-5">
      {/* Logo */}
      <div className="relative w-20">
        <Image src="/assets/logo.png" width={1000} height={1000} alt="Logo" />
      </div>

      {/* Nav Links */}
      <div className="mt-20">
        <p className="text-neutral-100 text-xl">No Nav Links Design Yet!</p>
      </div>
    </div>
  );
};

export default SideNav;
