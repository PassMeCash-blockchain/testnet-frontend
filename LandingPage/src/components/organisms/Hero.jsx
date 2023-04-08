import Image from "next/image";
import Button from "../atoms/Button";
import { Heading } from "../atoms/Heading";
import Text from "../atoms/Text";
import SectionSpacing from "../templates/SectionSpacing";

const Hero = () => {
  return (
    <SectionSpacing>
      <div className="grid grid-cols-2">
        <div className="">
          <Text className={"font-normal text-lg py-3"}>
            DONT BE STRANDED ANYMORE!
          </Text>
          <Heading level={1} className={"font-bold text-5xl tracking-wide"}>
            Access <span className="text-primaryColor">cash</span> at hand{" "}
            <br></br> <span className="text-primaryColor">speedily</span> via
            your crypto <br></br> or cash{" "}
            <span className="text-primaryColor">order</span>.
          </Heading>
          <Text className={"text-base font-normal py-3"}>
            Want to buy/sell or trade cryptocurrencies with a small <br></br>
            commission? our platform is the best place for you.
          </Text>
          <div className="flex gap-6">
            <Button filled className={"w-44"}>
              Sign up
            </Button>
            <Button className={"w-48"}>Request Money</Button>
          </div>
        </div>

        <div className="relative w-full h-[50vw]">
          <Image src="/assets/hero-img.png" fill alt="hero image" />
        </div>
      </div>
    </SectionSpacing>
  );
};

export default Hero;
