<<<<<<< HEAD
import Image from "next/image";
import Layout from "@/components/Templates/ForgetPasswordLayout";
import InputField from "@/components/atoms/InputField";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";

export default function createNewPassword() {
  const inputId = [
    { id: 1, type: "text", placeholder: "Date" },
    { id: 2, type: "text", placeholder: "LGA" },
    { id: 3, type: "text", placeholder: "Address 1" },
    { id: 4, type: "text", placeholder: "Address 2" },
  ];
  return (
    <Layout>
      {/* Logo */}

      <div className="py-10 px-8 space-y-10">
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
            Contact Information
          </Text>
          <Text className="font-normal lg:text-base text-sm text-[#0B011D]">
            Please fill in your information to make sure your application goes
            smoothly.
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
          </div>
          <Button filled className="w-full mt-5">
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
}
=======
import PageLayout from "@/components/Templates/PageLayout";
import Logo from "@/components/atoms/Logo";
import ContactInformationForm from "@/components/molecules/ContactInformationForm";

const PersonalInformation = () => {
  return (
    <PageLayout
      img="/assets/background-bg-girl.png"
      title="Exchange Crypto for Cash"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat tellus vitae aliquam nisl, habitant auctor praesent."
    >
      <ContactInformationForm />
    </PageLayout>
  );
};

export default PersonalInformation;
>>>>>>> origin/main
