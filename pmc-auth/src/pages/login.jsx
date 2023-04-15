import PageLayout from "@/components/Templates/PageLayout";
import Inputs from "@/components/atoms/Inputs";

const login = () => {
  const options = [
    "Favorite pet?",
    "Favorite pet?",
    "Favorite pet?",
    "Favorite pet?",
    "Favorite pet?",
    "Favorite pet?",
    "Favorite pet?",
  ];
  return (
    <PageLayout
      img="/assets/background-bg-wallet.png"
      title="Welcome Back"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat tellus vitae aliquam nisl, habitant auctor praesent."
    >
      <form action="">
        <h1>This is the form</h1>
        <div className="mt-5">
          <Inputs label="select" type="select" options={options} />
        </div>
      </form>
    </PageLayout>
  );
};

export default login;
