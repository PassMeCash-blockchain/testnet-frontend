import Image from "next/image";
import Icons from "../atoms/Icons";
import { conditionalClass } from "../atoms/libraries";
import { useRouter } from "next/router";

const Header = () => {
  const urlPath = useRouter().asPath;
  const navs = [
    { title: "Home", link: "/", icon: "home" },
    { title: "My Wallet", link: "", icon: "wallet" },
    { title: "Cards", link: "", icon: "card" },
    // { title: "Transactions", link: "", icon: "receipt" },
  ];

  console.log();
  return (
    <div className="px-4 py-5 shadow-[0px_-2px_14px_-5px_rgba(0,0,0,0.3)] grid md:grid-cols-[auto_1fr_auto] grid-cols-[auto_1fr] gap-10 font-normal text-base md:px-8">
      {/* Logo */}
      <div className="w-16 md:w-20">
        <Image
          src="/assets/pmc-logo.png"
          width={1000}
          height={1000}
          alt="Logo"
        />
      </div>

      {/* Nav */}
      <div className="text-center hidden grid-cols-[repeat(3,_auto)] gap-10 w-max mx-auto md:grid">
        {navs.map((nav, i) => (
          <div
            key={i}
            className={conditionalClass(
              "grid grid-cols-[auto_1fr] gap-3 items-center w-max cursor-pointer",
              urlPath === nav.link ? "text-[#874CF6]" : "text-[#B3B3B3]"
            )}
          >
            <Icons type={nav.icon} className={conditionalClass("text-lg")} />
            <p>{nav.title}</p>
          </div>
        ))}
      </div>

      {/* Notification and Settings */}
      <div className="justify-self-end items-center grid w-max md:grid-cols-[auto_auto] md:gap-5">
        {/* Notification */}
        <div className="relative cursor-pointer">
          <Icons type="bell" className="text-xl" />
          <span className="w-2 h-2 absolute right-[2px] -top-[2px] bg-red-500 rounded-full block"></span>
        </div>
        {/* Settings */}
        <div className="hidden grid-cols-[auto_auto] items-center gap-2 cursor-pointer md:grid">
          <Icons type="setting" className="text-2xl" />
          Settings
        </div>
      </div>
    </div>
  );
};

export default Header;
