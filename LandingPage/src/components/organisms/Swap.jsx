import InputField from "../atoms/InputField";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import { clients, gqls } from "../atoms/libraries";
import Image from "next/image";

const Swap = async () => {
  return (
    <div className="page-space ">
      <div className="grid container mx-auto mt-10 md:mt-20 md:gap-20 md:grid-cols-[3fr_2fr] lg:max-w-4xl">
        {/* Content */}
        <div>
          <Text className="font-semibold text-4xl text-[#0B011D]">
            Exchange crypto for cash quickly at a good rate.
          </Text>
          <Text className="mt-6 text-[#0B011D]">
            Quickly convert dozens of cryptocurrencies into your specific
            currency.
          </Text>
          <div className="mt-12 w-full mb-5 grid gap-4 grid-cols-3">
            <InputField
              type="text"
              className="w-full px-5 py-2 h-12 rounded-md bg-[#F0F0F0] col-span-2"
              placeholder="Amount |"
            />
            <select className="w-full justify-self-start text-center rounded-md bg-[#F0F0F0]">
              <option value="volvo">{}</option>
              <option value="saab">{}</option>
              <option value="fiat">{}</option>
            </select>
            <InputField
              type="text"
              className="w-full px-5 py-2 h-12 rounded-md bg-[#F0F0F0] col-span-2"
              placeholder="Convert | 12787799.68"
            />
            <select className="w-full text-center rounded-md bg-[#F0F0F0]">
              <option value="volvo">{}</option>
              <option value="saab">{}</option>
              <option value="fiat">{}</option>
            </select>
          </div>
          <Button filled className="w-full">
            Exchange now
          </Button>
        </div>

        {/* Illustration */}
        <div className="relative">
          <Image src="/assets/rocket.svg" fill alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Swap;
