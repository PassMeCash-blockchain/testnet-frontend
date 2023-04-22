import PageLayout from "@/components/Templates/PageLayout";
import SecurityQuestionsForm from "@/components/molecules/SecurityQuestionsForm";

const SecurityQuestions = () => {
  return (
    <PageLayout
      img="/assets/background-bg-girl.png"
      title="Exchange Crypto for Cash"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat tellus vitae aliquam nisl, habitant auctor praesent."
    >
      <SecurityQuestionsForm />
    </PageLayout>
  );
};

export default SecurityQuestions;
