import Image from "next/image";
import Text from "../atoms/Text";

export default function Layout({ children }) {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 h-[100%]">
      {/* Form field */}
      <div className="md:h-[100vh] h-[30vh] bg-white">{children}</div>

      {/* Image */}
      <div className="relative h-full col-span-2 bg-[#F2ECFE] md:grid hidden place-items-center">
        <div>
          <div className="text-center w-[654px] mb-5">
            <Text className="text-[#874CF6] font-semibold text-[50px] leading-[54px] tracking-[0.015em] my-3">
              Exchange Crypto for Cash
            </Text>
            <Text className="font-normal text-base tracking-[0.015em]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
              tellus vitae aliquam nisl, habitant auctor praesent.
            </Text>
          </div>
          <Image
            className="m-auto"
            src={"/assets/Assets-1.png"}
            width={450}
            height={450}
            alt="Recover PMC password"
          />
        </div>
      </div>
    </div>
  );
}
