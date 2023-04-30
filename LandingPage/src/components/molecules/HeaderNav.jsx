import Icons from "../atoms/Icons";
import { conditionalClass } from "../atoms/libraries";

const HeaderNav = ({ navs }) => {
  return (
    <div className="space-x-4 hidden md:flex">
      {navs.map((nav, i) => (
        <div
          key={i}
          className={conditionalClass(
            "flex text-[#B3B3B3]",
            nav.links && "space-x-2 items-center"
          )}
        >
          <p>{nav.title}</p>
          {nav.links && <Icons type="down" className="text-xl pt-[2px]" />}
        </div>
      ))}
    </div>
  );
};

export default HeaderNav;
