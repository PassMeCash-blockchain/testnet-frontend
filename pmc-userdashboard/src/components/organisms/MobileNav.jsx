import { useRouter } from "next/router";
import { conditionalClass } from "../atoms/libraries";
import Icons from "../atoms/Icons";

const MobileNav = () => {
  const urlPath = useRouter().asPath;
  const navs = [
    { title: "Home", link: "/", icon: "home" },
    { title: "My Wallet", link: "", icon: "wallet" },
    { title: "Cards", link: "", icon: "card" },
    { title: "Settings", link: "", icon: "setting" },
  ];

  return (
    <div className="grid grid-cols-[repeat(4,_1fr)] gap-10 items-center justify-items-center justify-center px-4 border-t border-[#ECEDEB] py-3 text-[#B3B3B3] text-xs font-semibold md:hidden">
      {navs.map((nav, i) => (
        <div
          key={i}
          className={conditionalClass(
            "grid gap-1 justify-items-center w-max cursor-pointer",
            urlPath === nav.link ? "text-[#874CF6]" : "text-[#B3B3B3]"
          )}
        >
          <Icons
            type={nav.icon}
            className={conditionalClass(i === 3 ? "text-xl" : "text-lg")}
          />
          <p>{nav.title}</p>
        </div>
      ))}
    </div>
  );
};

export default MobileNav;
