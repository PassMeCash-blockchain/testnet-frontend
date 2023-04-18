import PageLayout from "@/components/Templates/PageLayout";
import Button, { BackToLogin } from "@/components/atoms/Button";

const congratulations = () => {
  return (
    <PageLayout
      img="/assets/background-bg-girl.png"
      title="Exchange Crypto for Cash"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat tellus vitae aliquam nisl, habitant auctor praesent."
    >
      <div>
        <h2 className="text-2xl font-semibold">
          Congratulations! Your new password have been successfully created.
        </h2>
        <p className="mt-3">Procced to log in</p>

        <Button filled className="w-full mt-10">
          Log in
        </Button>

        <BackToLogin />
      </div>
    </PageLayout>
  );
};

export default congratulations;
