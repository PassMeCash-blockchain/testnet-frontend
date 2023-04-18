import Button from "../atoms/Button";
import Inputs from "../atoms/Inputs";

const SecurityQuestionsForm = () => {
  return (
    <form action="">
      <div>
        <h2 className="text-xl font- text-center font-semibold md:text-2xl md:text-left">
          Choose a security Question
        </h2>
        <p className="mt-3 text-center md:text-left">
          Please create a security question that may be use as an additional
          layer of security when you make changes to your account.
        </p>
      </div>

      {/* Inputs */}
      <div className="grid gap-7 mt-10">
        {/* Question One */}
        <div className="grid gap-3">
          <Inputs type="select" label="Security Question" />
          <Inputs type="text" label="Answer" />
        </div>

        {/* Question Two */}
        <div className="grid gap-3">
          <Inputs type="select" label="Security Question" />
          <Inputs type="text" label="Answer" />
        </div>

        {/* Question Three */}
        <div className="grid gap-3">
          <Inputs type="select" label="Security Question" />
          <Inputs type="text" label="Answer" />
        </div>
      </div>

      <Button filled className="w-full mt-10">
        Next
      </Button>
    </form>
  );
};

export default SecurityQuestionsForm;
