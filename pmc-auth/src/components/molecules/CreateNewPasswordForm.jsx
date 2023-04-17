import { BsArrowLeft } from "react-icons/bs";
import Button, { BackToLogin } from "../atoms/Button";
import Inputs from "../atoms/Inputs";

const CreateNewPasswordForm = () => {
  return (
    <form>
      <div>
        <h2 className="text-xl font- text-center font-semibold md:text-2xl md:text-left">
          Create new password
        </h2>
        <p className="mt-3 text-center md:text-left">
          Type in a password that meets all the requirements.
        </p>
      </div>

      {/* Inputs */}
      <div className="grid gap-5 mt-6">
        <Inputs type="password" label="Password" />
        <Inputs type="password" label="Re-enter password" />
      </div>

      <p className="text-sm mt-1">
        Password must be a mix of one uppercase letter and one symbol
      </p>

      {/* Button */}
      <Button filled className="w-full mt-10">
        Create new password
      </Button>

      {/* Back To Login */}
      <BackToLogin />
    </form>
  );
};

export default CreateNewPasswordForm;
