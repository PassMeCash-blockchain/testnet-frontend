import Image from "next/image";
import Button from "../atoms/Button";
import { Heading } from "../atoms/Heading";
import Text from "../atoms/Text";
import { clients, gqls } from "../atoms/libraries";

export async function fetchData() {
  const { data: heroData } = await clients.query({
    query: gqls`
    query MyQuery {
      heroSection(where: {id: "clg6q344f0lzu0bk6msy5muc8"}) {
        btnFilled
        btnFilledLink
        btnOulineLink
        buttonOutline
        heroTextMedium
        s1
        s2
        t1
        t2
        t3
        t4
        t5
        t6
        heroImage {
          url
        }
      }
    }
    `,
  });
  const allHeroData = heroData.heroSection;
  return {
    allHeroData,
  };
}

const Hero = async () => {
  const res = await fetchData();

  return (
    <SectionSpacing>
      <div className="grid grid-cols-[1fr_50vw] container mx-auto">
        <div className="pt-10">
          <Text className={"font-normal text-lg py-3"}>
            {res.allHeroData.heroTextMedium}
          </Text>
          <h1 className="font-bold text-5xl mt-6">
            {res.allHeroData.t1}{" "}
            <span className="text-primaryColor">{res.allHeroData.t2}</span>{" "}
            {res.allHeroData.t3 + "   "}
            <span> </span>
            <span className="text-primaryColor">{res.allHeroData.t4}</span>
            {res.allHeroData.t5}
            <span className="text-primaryColor">{res.allHeroData.t6}</span>.
          </h1>

          <Text className="text-base font-normal py-3 mt-6">
            {res.allHeroData.s1} <br></br>
            {res.allHeroData.s2}
          </Text>

          <div className="grid grid-cols-2 gap-5 mt-8">
            <Button filled>{res.allHeroData.buttonOutline}</Button>
            <Button>{res.allHeroData.btnFilled}</Button>
          </div>
        </div>

        <div className="relative w-full h-[45vw]">
          <Image src={res.allHeroData.heroImage.url} fill alt="hero image" />
        </div>
      </div>
    </SectionSpacing>
  );
};

export default Hero;
