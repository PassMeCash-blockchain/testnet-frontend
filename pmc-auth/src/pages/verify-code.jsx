import Image from "next/image";
import InputField from "@/components/atoms/Inputs";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";

export default function Home() {
  const verifyId = [1, 2, 3, 4, 5, 6];
  return (
    <div className="grid place-items-center py-5 px-8">
      <Image
        src={"/assets/PassMeCash-Logo.png"}
        alt="PMC Logo"
        width={111}
        height={60}
        className="mb-24"
      />

      {/* Text */}
      <div className="leading-[140%] text-center tracking-[0.015em]">
        <Text className="font-medium md:text-3xl text-2xl my-6">
          Please enter code
        </Text>
        <Text className="font-normal md:text-base text-xs text-[#B3B3B3] my-6">
          Enter the code we’ve sent to
          <span className="font-medium text-black">+23481*******781</span>
          Didn’t receive the code?
        </Text>
      </div>

      {/* Input */}
      <div className="text-center">
        <Text className="font-semibold text-base my-3">Enter Code</Text>
        <div className="grid grid-cols-6 gap-3.5 max-w-md">
          {verifyId.map((i) => (
            <div
              key={i}
              className=" rounded-md border-[0.8px] md:h-16 h-12 md:w-16 w-12  border-solid border-[#ABA6A6] py-2 px-4 text-base grid"
            >
              <InputField
                type="number"
                placeHolder=""
                className="outline-none bg-transparent text-black w-full"
              />
            </div>
          ))}
        </div>
        <div className="font-semibold text-sm">
          <Text className="text-[#B3B3B3] my-4">Code valid for 30 minutes</Text>
          <Text className="text-black">Resend code</Text>
        </div>
        <div className="w-auto md:my-16 my-40">
          <Button filled className="w-full max-w-sm">
            Verify
          </Button>
        </div>
      </div>
    </div>
  );
}
