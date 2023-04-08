import Image from "next/image";
import Button from "../atoms/Button";
import { Heading } from "../atoms/Heading";
import Text from "../atoms/Text";
import SectionSpacing from "../templates/SectionSpacing";
import { clients, gqls } from '../atoms/libraries';


export async function fetchData() {
  const {data: heroData} = await clients.query({
    query: gqls`
    query MyQuery {
heroSection(where: {id: "clg6q344f0lzu0bk6msy5muc8"}) {
  buttons
  heroTextB
  heroTextMedium
  heroTextSmall
  heroImage {
    url
  }
}
}
    `,
 });
 const {allHeroData} = heroData.heroSection;
 return{
  allHeroData,
 };

}

const Hero = async () => {
  const res = await fetchData()

  return (
    <SectionSpacing>
      <div className="grid grid-cols-2">
        <div className="">
          <Text className={"font-normal text-lg py-3"}>
            {res.allHeroData.heroTextMedium}
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
