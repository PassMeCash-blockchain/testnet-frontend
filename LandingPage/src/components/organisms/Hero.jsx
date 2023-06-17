import Image from "next/image";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

const Hero = async () => {
  const isDesktop = window.innerWidth >= 768;
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="grid container mx-auto gap-10 page-space mt-10 lg:mt-20 lg:grid-cols-[1fr_45vw]">
      {/* Content */}
      <div>
        <p className="text-lg">Don’t be stranded anymore!</p>

        <h1 className="font-bold text-3xl mt-5 md:text-5xl">
          Access <span className="text-primaryColor">cash</span> at hand{" "}
          <span className="text-primaryColor">speedily</span> via your crypto or
          cash
          <span className="text-primaryColor"> order.</span>
        </h1>

        <p className="mt-5">
          Want to swap your cryptocurrencies with a small commission? <br />
          Our platform is the best place for you.
        </p>

        <div className="grid grid-cols-2 max-w-md gap-5 mt-8">
          <Button filled>Sign up</Button>
          <Button>Request Money</Button>
        </div>
      </div>

      {/* Side Image */}
      <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
        {
          isDesktop && <Image
          src="/assets/hero-img.png"
          width={1000}
          height={1000}
          alt="hero image"
        />
        }

        {
          isMobile && <Image
          src="/assets/mobile.png"
          width={1000}
          height={1000}
          alt="hero image"
        />
        }
        
      </div>
    </div>
  );
};

export default Hero;
