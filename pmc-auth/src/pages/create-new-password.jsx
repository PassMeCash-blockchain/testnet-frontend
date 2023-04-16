import Image from "next/image";
import Layout from "@/components/Templates/ForgetPasswordLayout";
import InputField from "@/components/atoms/Inputs";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";

export default function createNewPassword() {
  const inputId = [
    { id: 1, placeholder: "password", type: "password" },
    { id: 2, placeholder: "Re-enter password", type: "password" },
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
          <Text className="not-italic font-semibold text-2xl">
            Create new password
          </Text>
          <Text className="font-normal lg:text-base text-sm text-[#0B011D]">
            Type in a password that meets all the requirements.
          </Text>
        </div>

        {/* Form */}
        <div className="w-full">
          <div className="text-2xl text-black lg:max-w-md w-full">
            {inputId.map((input, i) => (
              <div
                key={i}
                className="rounded-md border-[0.8px] h-14 border-solid border-[#ABA6A6] py-2 px-4 my-5 text-base grid grid-cols-2"
              >
                <label className="relative cursor-pointer">
                  <InputField
                    type={input.type}
                    placeHolder={input.placeholder}
                    className="outline-none py-2 bg-transparent text-black focus:focus:border-black placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                  />

                  <span className="bg-white px-1 absolute left-0 top-2 transition duration-200 input-text">
                    {input.placeholder}
                  </span>
                </label>
              </div>
            ))}
            <Text className="font-normal text-xs text-[#0B011D] tracking-[#0B011D]">
              Password must be a mix of one uppercase letter and one symbol
            </Text>
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
