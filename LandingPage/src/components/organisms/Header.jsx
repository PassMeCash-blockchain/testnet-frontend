import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import HeaderNav from "../molecules/HeaderNav";
import HeaderMobileNav from "../molecules/HeaderMobileNav";

const Header = () => {
  const navs = [
    { title: "Crypto", links: [] },
    { title: "What we do" },
    { title: "Our Services", links: [] },
    { title: "FAQ" },
  ];

  return (
    <div className="grid grid-cols-[1fr_auto] page-space font-medium text-base items-center pt-5 md:pt-5">
      <div className="flex space-x-8 items-center">
        <Logo width="w-20" />
        <HeaderNav navs={navs} />
      </div>

      <div className="gap-5 hidden md:grid lg:grid-cols-2">
        <Button>Log in</Button>
        <Button filled className="hidden lg:block">
          Sign up
        </Button>
      </div>

      <HeaderMobileNav navs={navs} />
    </div>
  );
};

export default Header;
