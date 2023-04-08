import Image from "next/image";
import Button from "../atoms/Button";
import { Heading } from "../atoms/Heading";
import Text from "../atoms/Text";
import SectionSpacing from "../templates/SectionSpacing";

const Hero = () => {
  return (
    <SectionSpacing>
      <div className="grid grid-cols-[1fr_50vw] container mx-auto">
        <div className="pt-10">
          <Text className={"font-normal text-lg py-3"}>
            DONT BE STRANDED ANYMORE!
          </Text>
          <h1 className="font-bold text-5xl mt-6">
            Access <span className="text-primaryColor">cash</span> at hand{" "}
            <span className="text-primaryColor">speedily</span> via your crypto
            or cash <span className="text-primaryColor">order</span>.
          </h1>

          <Text className="text-base font-normal py-3 mt-6">
            Want to buy/sell or trade cryptocurrencies with a small <br></br>
            commission? our platform is the best place for you.
          </Text>

          <div className="grid grid-cols-2 gap-5 mt-8">
            <Button filled>Sign up</Button>
            <Button>Request Money</Button>
          </div>
        </div>

        <div className="relative w-full h-[45vw]">
          <Image src="/assets/hero-img.png" fill alt="hero image" />
        </div>
      </div>
    </SectionSpacing>
  );
};

export default Hero;
