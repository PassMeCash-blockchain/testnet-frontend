import AddCardPin from "@/components/molecules/AddCardPin";
import ChooseCardToCreate from "@/components/molecules/ChooseCardToCreate";
import CreateCardStepIndicator from "@/components/molecules/CreateCardStepIndicator";
import CustomizeCard from "@/components/molecules/CustomizeCard";
import FundCard from "@/components/molecules/FundCard";
import PageLayout from "@/components/templates/PageLayout";

const CreateVirtualCard = () => {
  return (
    <PageLayout>
      {/* Step Indicator */}
      <CreateCardStepIndicator />

      {/* Content */}
      {/* <ChooseCardToCreate /> */}
      {/* <CustomizeCard /> */}
      {/* <AddCardPin /> */}
      <FundCard />
    </PageLayout>
  );
};

export default CreateVirtualCard;
