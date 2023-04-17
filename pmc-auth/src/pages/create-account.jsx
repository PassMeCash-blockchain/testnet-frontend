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
      <CreateAccountForm />
    </PageLayout>
  );
};

export default CreateAccount;
