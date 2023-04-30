import Link from "next/link";
import Logo from "../atoms/Logo";
import Icons from "../atoms/Icons";
import { conditionalClass } from "../atoms/libraries";

const Footer = () => {
  const linksSchema = [
    {
      title: "Our Services",
      links: [
        { title: "Request Cash", link: "" },
        { title: "Order Spray Bills", link: "" },
        { title: "P2P", link: "" },
        { title: "Support Center", link: "" },
        { title: "Buy Crypto", link: "" },
        { title: "Sell Crypto", link: "" },
      ],
    },
    {
      title: "What we do",
      links: [
        { title: "About", link: "" },
        { title: "Community", link: "" },
        { title: "Privacy", link: "" },
        { title: "Risk Warning", link: "" },
        { title: "Blog", link: "" },
        { title: "Terms of Use", link: "" },
      ],
    },
    {
      title: "Help Center",
      links: [
        { title: "Email: support@passmecash.com", link: "" },
        { title: "Contact Support", link: "" },
        { title: "FAQ", link: "" },
        { title: "API Reference", link: "" },
        { title: "Technical Support", link: "" },
        { title: "Report Issues", link: "" },
      ],
    },

    // This section should be left commented
    // {
    //   title: "Buy Anywhere",
    //   links: [
    //     { title: "Buy BNB", link: "" },
    //     { title: "Buy Litecoin", link: "" },
    //     { title: "Buy Ripple", link: "" },
    //     { title: "Buy Bitcoin", link: "" },
    //     { title: "Buy Ethereum", link: "" },
    //     { title: "Buy Dogecoin", link: "" },
    //     { title: "Buy BUSD", link: "" },
    //     { title: "Buy DeFi", link: "" },
    //     { title: "Browse Crypto Prices", link: "" },
    //   ],
    // },
  ];

  const socialIcons = ["facebook", "twitter", "linkedIn", "instagram"];
  return (
    <div className="mt-20 md:mt-40 bg-[#EFEFEF]">
      <div className="page-space">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[auto_auto] py-10 md:py-20">
          <div className="lg:hidden">
            <Logo width="w-20" />
            <p className="mt-3 text-lg">
              28 Jakpa Road, Effurun, Delta State, Nigeria.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-10 md:gap-20 xl:gap-40">
            {linksSchema.map((category, i) => (
              <div key={i} className={conditionalClass()}>
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <div className="grid gap-3 mt-3">
                  {category.links.map((link, i) => (
                    <Link key={i} href="">
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="hidden lg:block">
              <Logo width="w-20" />
              <p className="mt-3 text-lg">
                28 Japa Road, Effurun, Delta State Nigeria.
              </p>
            </div>
            <div className="text-3xl grid grid-cols-[repeat(4,_auto)] gap-5 items-center w-max mt-5">
              {socialIcons.map((icon, i) => (
                <Icons key={i} type={icon} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copy Right */}
      <p className="text-center border-t border-[#0B011D] py-5">
        PassMeCash &copy; 2023
      </p>
    </div>
  );
};

export default Footer;
