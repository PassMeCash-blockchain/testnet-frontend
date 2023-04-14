import Image from "next/image";
import Layout from "@/components/Templates/Layout";
import InputField from "@/components/atoms/InputField";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="py-40 px-8">
          <div>Logo</div>

          {/* text */}
          <div className="tracking-[0.015em] text-black leading-[140%] my-12">
            <Text className="not-italic font-semibold text-2xl">
              Reset You Password
            </Text>
            <Text className="font-mediuml text-sm">
              Enter your Phone Number to reset your password
            </Text>
          </div>

          {/* Form */}
          <div className="w-[380px] my-8">
            <div className="text-2xl text-black flex space-x-5 h-14">
              <div className="w-[78px] rounded-md border-[0.8px] border-solid border-[#ABA6A6] py-2 px-4 text-base grid">
                <InputField
                  type="number"
                  placeholder="+234"
                  className="outline-none bg-transparent text-black w-full"
                />
              </div>
              <div className="w-[280px] rounded-md border-[0.8px] border-solid border-[#ABA6A6] py-2 px-4 text-lg grid">
                <InputField
                  type="number"
                  placeholder="Phone number"
                  className="outline-none bg-transparent text-black w-full"
                />
              </div>
            </div>
            <Button filled className="w-full mt-5">
              Reset password
            </Button>
          </div>

          <div className="text-2xl text-black"></div>
        </div>
      </Layout>
    </div>
  );
}
