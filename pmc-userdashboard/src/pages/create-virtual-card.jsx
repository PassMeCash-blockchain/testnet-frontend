import ChooseCardToCreate from "@/components/molecules/ChooseCardToCreate";
import CreateCardStepIndicator from "@/components/molecules/CreateCardStepIndicator";
import CustomizeCard from "@/components/molecules/CustomizeCard";
import PageLayout from "@/components/templates/PageLayout";

const CreateVirtualCard = () => {
  return (
    <PageLayout>
      {/* Step Indicator */}
      <CreateCardStepIndicator />

      {/* Content */}
      {/* <ChooseCardToCreate /> */}
      <CustomizeCard />
    </PageLayout>
  );
};

export default CreateVirtualCard;
