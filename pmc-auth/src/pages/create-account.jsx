import Logo from "@/components/atoms/Logo";
import CreateAccountForm from "@/components/molecules/CreateAccountForm";
import Image from "next/image";

const { default: PageLayout } = require("@/components/Templates/PageLayout");

const CreateAccount = () => {
  return (
    <PageLayout
      img="/assets/background-bg-girl.png"
      title="Exchange Crypto for Cash"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat tellus vitae aliquam nisl, habitant auctor praesent."
    >
      <div className="p-8 h-full grid grid-rows-[auto_1fr] md:p-16">
        <Logo className="mx-auto" />
        <CreateAccountForm />
      </div>
    </PageLayout>
  );
};

export default CreateAccount;
