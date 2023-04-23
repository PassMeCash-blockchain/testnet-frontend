import InputField from "../atoms/InputField";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import { clients, gqls } from "../atoms/libraries";
import Image from "next/image";

export async function fetchData() {
  const { data: swapData } = await clients.query({
    query: gqls`
    query MyQuery {
      calculatorSection(where: {id: "clg7trcgs10ju0bk69hykwjmk"}) {
        calculatorBtn
        calculatorTextBig
        calculatorTextSmall
        option1
        option2
        option3
        option4
        calculatorImage {
          url
        }
      }
    }
    `,
  });
  const allSwapData = swapData.calculatorSection;
  return {
    allSwapData,
  };
}

const Swap = async () => {
  const res = await fetchData();
  return (
    <SectionSpacing>
      <div className="grid md:grid-cols-[3fr_2fr] gap-20 container mx-auto lg:max-w-4xl">
        {/* Content */}
        <div>
          <Text className="font-semibold text-4xl text-[#0B011D]">
            {res.allSwapData.calculatorTextBig}
          </Text>
          <Text className="mt-6 text-[#0B011D]">
            {res.allSwapData.calculatorTextSmall}
          </Text>
          <div className="mt-12 w-full mb-5 grid gap-4 grid-cols-3">
            <InputField
              type="text"
              className="w-full px-5 py-2 h-12 rounded-md bg-[#F0F0F0] col-span-2"
              placeholder="Amount |"
            />
            <select className="w-full justify-self-start text-center rounded-md bg-[#F0F0F0]">
              <option value="volvo">{res.allSwapData.option1}</option>
              <option value="saab">{res.allSwapData.option2}</option>
              <option value="fiat">{res.allSwapData.option3}</option>
            </select>
            <InputField
              type="text"
              className="w-full px-5 py-2 h-12 rounded-md bg-[#F0F0F0] col-span-2"
              placeholder="Convert | 12787799.68"
            />
            <select className="w-full text-center rounded-md bg-[#F0F0F0]">
              <option value="volvo">{res.allSwapData.option4}</option>
              <option value="saab">{res.allSwapData.option1}</option>
              <option value="fiat">{res.allSwapData.option2}</option>
            </select>
          </div>
          <Button filled className="w-full">
            {res.allSwapData.calculatorBtn}
          </Button>
        </div>

        {/* Illustration */}
        <div className="relative">
          <Image
            src={res.allSwapData.calculatorImage.url}
            fill
            alt="Illustration"
          />
        </div>
      </div>
    </SectionSpacing>
  );
};

export default Swap;
