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
