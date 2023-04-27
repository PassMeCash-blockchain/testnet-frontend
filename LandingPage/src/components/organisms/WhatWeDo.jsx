import Text from "../atoms/Text";
import Button from "../atoms/Button";
import { Images } from "../atoms/libraries";

const WhatWeDo = async () => {
  return (
    <div className="grid gap-20 items-center page-space container mx-auto mt-10 md:mt-20 md:grid-cols-[2fr_3fr] lg:max-w-4xl">
      {/* Illustration */}
      <div className="relative w-full hidden md:flex">
        <Images
          className="hidden md:flex"
          src="/assets/rocketboy.svg"
          width={1000}
          height={1000}
          alt="Illustration"
        />
      </div>

      {/* Content */}
      <div>
        <h2 className="relative text-2xl text-center before:w-36 before:left-1/2 before:-translate-x-1/2 before:h-[3px] before:absolute before:bg-[#E5D8FD] before:-bottom-1 md:text-lg md:text-left md:before:w-24 md:before:left-0 md:before:translate-x-0">
          What we do
        </h2>
        <h3 className="font-semibold text-3xl mt-8 text-center md:text-left md:text-4xl">
          Learn More About Us
        </h3>
        <Text className="text-[16px] mt-4 text-center md:text-left">
          PassMeCash is an exchange platform that connects users to the nearest
          agent, in exchange for cash or crypto. Our mission is to bridge the
          gap between our users and access to their funds through the world{"'"}s
          most extensive financial system.
        </Text>
        <Button className="w-full bg-primaryColor text-white px-2 py-2 mt-8">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default WhatWeDo;
