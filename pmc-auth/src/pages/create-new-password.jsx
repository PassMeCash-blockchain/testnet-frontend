import PageLayout from "@/components/Templates/PageLayout";
import CreateNewPasswordForm from "@/components/molecules/CreateNewPasswordForm";

const CreateNewPassword = () => {
  return (
    <PageLayout
      img="/assets/background-bg-girl.png"
      title="Exchange Crypto for Cash"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat tellus vitae aliquam nisl, habitant auctor praesent."
    >
      <CreateNewPasswordForm />
    </PageLayout>
  );
};

export default CreateNewPassword;
