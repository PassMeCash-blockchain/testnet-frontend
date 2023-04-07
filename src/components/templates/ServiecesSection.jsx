import Image from "next/image";
import Text from "../atoms/Text";
import { Heading } from "../atoms/Heading";

const ServiecesSection = () => {
  return (
    <div>
      {/* Image */}
      <div className="relative w-1/2 h-40">
        <Image src="/assets/service-img1.png" fill alt="Side Image" />
      </div>

      {/* Contents */}
      <div>
        <h2 className="relative before:w-20 before:h-[3px] before:absolute before:bg-[#E5D8FD] before:-bottom-1">
          Our Services
        </h2>
        <Heading>Order for spray bills</Heading>
        <Text>
          We understand how difficult it is to get your fund when you try to
          make a withdrawal. That is why we are making it seamless for our users
          to make a quick request of their money that can be delivered to you
          from any of our close agents by bank transfer or a meeting point.
        </Text>
      </div>
    </div>
  );
};

export default ServiecesSection;
