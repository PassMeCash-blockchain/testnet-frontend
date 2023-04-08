import Image from "next/image";
import Text from "../atoms/Text";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import clsx from "clsx";


import { clients } from "../components/atoms/libraries";
import { gqls } from "../components/atoms/libraries";

export async function fetchData() {}


const ServiecesSection = ({
  img,
  icon,
  inverted,
  header,
  title,
  text,
  btnText,
  btnLink,
}) => {
  return (

    <di className="grid grid-cols-2 place-items-center">

    <div className="grid place-items-center shadow-[-24px_0px_32px_-8px_rgba(0,0,0,0.05),_0px_24px_32px_-8px_rgba(0,_0,_0,_0.05)] rounded-lg py-10 container mx-auto md:grid-cols-2 md:py-0 md:rounded-none md:shadow-none md:max-w-none">

      {/* Image */}
      <div
        className={clsx(
          "relative w-full h-[50vw] max-h-[738px] hidden md:flex",
          inverted && "order-1"
        )}
      >
        <Image src={img} fill alt="Side Image" />
      </div>

      {/* Icon */}
      <div className="relative w-16 h-16 md:hidden">
        <Image src={icon} fill alt="Icon" />
      </div>

      {/* Contents */}
      <div className="px-10 lg:px-20">
        <h2 className="relative hidden before:w-20 before:h-[3px] before:absolute before:bg-[#E5D8FD] before:-bottom-1 md:block">
          {header}
        </h2>

        <div className="pt-4 lg:pt-8">
          <Heading level={2} className="font-semibold text-center md:text-left">
            {title}
          </Heading>
          <Text className="pt-3 text-center md:text-left lg:pt-5">{text}</Text>
          <Button filled className="mt-8 w-full max-w-md mx-auto md:mx-0">
            {btnText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiecesSection;
