import Image from "next/image";
import Layout from "@/components/Templates/ForgetPasswordLayout";
import InputField from "@/components/atoms/Inputs";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";

export default function resetSuccessful() {
  const inputId = [
    { id: 1, placeholder: "password" },
    { id: 2, placeholder: "Re-enter password" },
  ];
  return (
    <Layout>
      {/* Logo */}
      <div className="md:pt-32 py-20 px-8 space-y-10">
        <Image
          src={"/assets/PassMeCash-Logo.png"}
          alt="PMC Logo"
          width={111}
          height={60}
          className="md:m-0 m-auto"
        />

        {/* text */}
        <div className="tracking-[0.015em] text-black leading-[140%]">
          <Text className="not-italic font-semibold md:text-2xl text-lg">
            Congratulations! Your new password have been successfully created.
          </Text>
          <Text className="font-normal md:text-base text-sm text-[#0B011D]">
            Procced to log in
          </Text>
        </div>

        {/* Form */}
        <div className="w-full">
          <Button filled className="w-full mt-5">
            Login
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
