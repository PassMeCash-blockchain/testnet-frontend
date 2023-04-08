import Image from "next/image";
import Text from "../atoms/Text";
import { Heading } from "../atoms/Heading";
import Button from "../atoms/Button";
import clsx from "clsx";
import { clients } from "../components/atoms/libraries";
import { gqls } from "../components/atoms/libraries";

export async function fetchData() {
  
}

const ServiecesSection = ({
  img,
  inverted,
  header,
  title,
  text,
  btnText,
  btnLink,
}) => {
  return (
    <div className="grid grid-cols-2 place-items-center">
      {/* Image */}
      <div
        className={clsx(
          "relative w-full h-[50vw] max-h-[738px]",
          inverted && "order-1"
        )}
      >
        <Image src={img} fill alt="Side Image" />
      </div>

      {/* Contents */}
      <div className="px-20">
        <h2 className="relative before:w-20 before:h-[3px] before:absolute before:bg-[#E5D8FD] before:-bottom-1">
          {header}
        </h2>

        <div className="pt-8">
          <Heading level={2} className="font-semibold">
            {title}
          </Heading>
          <Text className="pt-5">{text}</Text>
          <Button filled className="mt-8 w-full max-w-md">
            {btnText}
          </Button>
        </div>
      </div>
    </di>
  );
};

export default ServiecesSection;
