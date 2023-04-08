import Image from "next/image";
import Button from "../atoms/Button";
import { Heading } from "../atoms/Heading";
import Text from "../atoms/Text";
import SectionSpacing from "../templates/SectionSpacing";

const Hero = (allHeroData) => {
  return (
    <SectionSpacing>
      <div className="grid grid-cols-2">
        <div className="">
          <Text className={"font-normal text-lg py-3"}>
            {allHeroData.heroTextMedium}
          </Text>
          <Heading level={1} className={"font-bold text-5xl tracking-wide"}>
            {allHeroData.heroTextB}
          </Heading>
          <Text className={"text-base font-normal py-3"}>
            {allHeroData.heroTextSmall}
          </Text>
          <div className="flex gap-6">
            
            <Button filled className={"w-44"}>
              {allHeroData.buttons.button1.title}
            </Button>
            <Button className={"w-48"}>{allHeroData.buttons.button2.title}</Button>
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
