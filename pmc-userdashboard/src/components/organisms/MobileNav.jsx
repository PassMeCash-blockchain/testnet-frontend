import { useRouter } from "next/router";
import { conditionalClass } from "../atoms/libraries";
import Icons from "../atoms/Icons";
import Link from "next/link";

const MobileNav = () => {
  const urlPath = useRouter().asPath;
  const navs = [
    { title: "Home", link: "/", icon: "home" },
    { title: "Crypto Wallets", link: "", icon: "bitcoin" },
    { title: "Cards", link: "", icon: "card" },
    { title: "Settings", link: "", icon: "setting" },
  ];

  return (
    <div className="grid grid-cols-[repeat(4,_1fr)] gap-10 items-center justify-items-center justify-center px-4 border-t border-[#ECEDEB] py-3 text-[#B3B3B3] text-xs font-medium md:hidden">
      {navs.map((nav, i) => (
        <Link href={nav.link} key={i}>
          <div
            className={conditionalClass(
              "grid grid-rows-[1fr_auto] gap-1 justify-items-center w-max cursor-pointer",
              urlPath === nav.link ? "text-[#874CF6]" : "text-[#B3B3B3]"
            )}
          >
            <Icons
              type={nav.icon}
              className={conditionalClass(
                nav.title === "Crypto Wallets" || nav.title === "Settings"
                  ? "text-xl"
                  : "text-lg"
              )}
            />
            <p>{nav.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;
