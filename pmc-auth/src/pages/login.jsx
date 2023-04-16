import PageLayout from "@/components/Templates/PageLayout";
import Logo from "@/components/atoms/Logo";
import LoginForm from "@/components/molecules/LoginForm";
import { useEffect, useState } from "react";

const login = () => {
  return (
    <PageLayout
      img="/assets/background-bg-wallet.png"
      title="Welcome Back"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat tellus vitae aliquam nisl, habitant auctor praesent."
    >
      <div className="p-8 h-full grid grid-rows-[auto_1fr] md:p-16">
        <Logo className="mx-auto" />
        <LoginForm />
      </div>
    </PageLayout>
  );
};

export default login;
