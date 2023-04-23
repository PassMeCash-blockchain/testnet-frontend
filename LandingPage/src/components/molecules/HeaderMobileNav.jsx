"use client";

import { useState } from "react";
import Button from "../atoms/Button";
import Icons from "../atoms/Icons";
import { conditionalClass } from "../atoms/libraries";

const HeaderMobileNav = ({ navs }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div>
      {/* Icon */}
      <div onClick={() => setShowMobileNav(true)}>
        <Icons type="menu" className="text-4xl cursor-pointer md:hidden" />
      </div>

      <div
        className={conditionalClass(
          "fixed bg-[rgba(0,_0,_0,_0.2)] w-screen h-screen top-0 transition-all",
          showMobileNav ? "left-0" : "left-[100vw]"
        )}
      >
        <div className="max-w-xs bg-white h-full ml-auto py-5 px-5">
          {/* Close Icon */}
          <div onClick={() => setShowMobileNav(false)}>
            <Icons
              type="close-circle"
              className="ml-auto text-2xl text-neutral-600 cursor-pointer"
            />
          </div>

          {/* Nav */}
          <div className="grid justify-items-center gap-5 mt-20">
            {navs.map((nav, i) => (
              <div
                key={i}
                className={conditionalClass(
                  "flex text-[#B3B3B3]",
                  nav.links && "space-x-2 items-center"
                )}
              >
                <p>{nav.title}</p>
                {nav.links && (
                  <Icons type="down" className="text-xl pt-[2px]" />
                )}
              </div>
            ))}
          </div>
          {/* Buttons */}
          <div className="grid gap-5 mt-20 mx-auto">
            <Button>Log in</Button>
            <Button filled>Sign up</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileNav;
