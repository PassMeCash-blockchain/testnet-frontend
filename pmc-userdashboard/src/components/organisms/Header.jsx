import Image from "next/image";
import Icons from "../atoms/Icons";
import { conditionalClass } from "../atoms/libraries";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const urlPath = useRouter().asPath;
  const navs = [
    { title: "Home", link: "/", icon: "home" },
    // {
    //   title: "Crypto Wallets",
    //   link: "/crypto-wallets",
    //   icon: "bitcoin-circle",
    // },
    { title: "Cards", link: "/cards", icon: "card" },
    { title: "Settings", link: "/settings", icon: "setting" },
  ];

  return (
    <div className="px-4 py-4 shadow-[0px_-2px_14px_-5px_rgba(0,0,0,0.3)] grid grid-cols-[auto_1fr] gap-10 items-center font-normal text-base md:px-8 md:grid-cols-[auto_1fr_auto]">
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
      <div className="text-center hidden grid-cols-[repeat(4,_auto)] gap-10 w-max items-center mx-auto md:grid">
        {navs.map((nav, i) => (
          <Link key={i} href={nav.link}>
            <div
              className={conditionalClass(
                "grid grid-cols-[auto_1fr] gap-3 items-end w-max cursor-pointer",
                urlPath === nav.link ? "text-[#874CF6]" : "text-[#B3B3B3]"
              )}
            >
              <Icons
                type={nav.icon}
                className={conditionalClass(
                  nav.title === "Crypto Wallets" || nav.title === "Settings"
                    ? "text-3xl"
                    : "text-2xl"
                )}
              />
              <p
                className={conditionalClass(
                  nav.title === "Home" && "leading-[15px]",
                  nav.title === "Cards" && "leading-[17px]"
                )}
              >
                {nav.title}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Notification and Settings */}
      <div className="justify-self-end items-center grid w-max grid-cols-[auto_auto] gap-5">
        {/* Notification */}
        <div className="relative cursor-pointer">
          <Icons type="bell" className="text-xl" />
          <span className="w-2 h-2 absolute right-[2px] -top-[2px] bg-red-500 rounded-full block"></span>
        </div>
        {/* User Image */}
        <Link href="/profile">
          <div className="w-10 rounded-full overflow-hidden cursor-pointer">
            <Image
              src="/assets/user-test-img-1.jpg"
              width={1000}
              height={1000}
              alt="User Image"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
