import PageLayout from "@/components/Templates/PageLayout";
import ResetPasswordForm from "@/components/molecules/ResetPasswordForm";

const PasswordReset = () => {
  return (
    <PageLayout
      img="/assets/background-bg-girl.png"
      title="Exchange Crypto for Cash"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat tellus vitae aliquam nisl, habitant auctor praesent."
    >
      <ResetPasswordForm />
    </PageLayout>
  );
};

export default PasswordReset;
