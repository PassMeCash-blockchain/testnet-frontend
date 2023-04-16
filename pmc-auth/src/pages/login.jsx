import PageLayout from "@/components/Templates/PageLayout";
import Inputs from "@/components/atoms/Inputs";
import LoginForm from "@/components/molecules/LoginForm";
import Image from "next/image";
import { useEffect, useState } from "react";

const login = () => {
  const [pass, setpass] = useState("");

  useEffect(() => console.log(pass), [pass]);
  return (
    <PageLayout
      img="/assets/background-bg-wallet.png"
      title="Welcome Back"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat tellus vitae aliquam nisl, habitant auctor praesent."
    >
      <div className="p-8 h-full grid grid-rows-[auto_1fr] md:p-16">
        <div className="relative w-20 mx-auto">
          <Image src="/assets/logo.png" width={1000} height={1000} alt="Logo" />
        </div>
        <LoginForm />
      </div>
    </PageLayout>
  );
};

export default login;
