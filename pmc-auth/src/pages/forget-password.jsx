import Image from "next/image";
import Layout from "@/components/Templates/ForgetPasswordLayout";
import InputField from "@/components/atoms/Inputs";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";

export default function forgetPassword() {
  return (
    <Layout>
      {/* Logo */}

      <div className="py-40 px-8 space-y-10">
        <Image
          src={"/assets/PassMeCash-Logo.png"}
          alt="PMC Logo"
          width={111}
          height={60}
        />

        {/* text */}
        <div className="tracking-[0.015em] text-black leading-[140%]">
          <Text className="not-italic font-semibold text-2xl">
            Reset You Password
          </Text>
          <Text className="font-normal lg:text-base text-sm text-[#0B011D]">
            Enter your Phone Number to reset your password
          </Text>
        </div>

        {/* Form */}
        <div className="w-full">
          <div className="text-2xl text-black grid grid-cols-4 gap-2 h-14">
            <div className="rounded-md border-[0.8px] border-solid border-[#ABA6A6] py-2 px-4 text-base grid">
              <InputField
                type="number"
                placeHolder="+234"
                className="outline-none bg-transparent text-black"
              />
            </div>
            <div className="rounded-md border-[0.8px] border-solid border-[#ABA6A6] py-2 px-4 text-lg grid col-span-3">
              <InputField
                type="number"
                placeHolder="Phone number"
                className="outline-none bg-transparent text-black w-full"
              />
            </div>
          </div>
          <Button filled className="w-full mt-5">
            Reset password
          </Button>
        </div>

        <div className="flex space-x-1">
          <Image
            src={"/SVG/ArrowLeft.svg"}
            width={20}
            height={20}
            alt="back arrow"
          />
          <Text className="font-medium text-base leading-[140%] tracking-[0.015em] ">
            Back to login
          </Text>
        </div>
      </div>
    </Layout>
  );
}
