import PageLayout from "@/components/Templates/PageLayout";
import Logo from "@/components/atoms/Logo";
import PersonalInformationForm from "@/components/molecules/PersonalInformationForm";

const PersonalInformation = () => {
  return (
    <PageLayout
      img="/assets/background-bg-girl.png"
      title="Exchange Crypto for Cash"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat tellus vitae aliquam nisl, habitant auctor praesent."
    >
      <div className="p-8 h-full gap-10 grid grid-rows-[auto_1fr] lg:p-16">
        <Logo className="mx-auto" />
        <PersonalInformationForm />
      </div>
    </PageLayout>
  );
};

export default PersonalInformation;
