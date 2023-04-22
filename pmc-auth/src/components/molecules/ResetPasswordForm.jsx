import { BsArrowLeft } from "react-icons/bs";
import Button, { BackToLogin } from "../atoms/Button";
import Inputs from "../atoms/Inputs";

const ResetPasswordForm = () => {
  return (
    <form action="">
      <div>
        <h2 className="text-xl font- text-center font-semibold md:text-2xl md:text-left">
          Reset You Password
        </h2>
        <p className="mt-3 text-center md:text-left">
          Enter your <span className="font-semibold">Phone Number</span> to
          reset your password
        </p>
      </div>

      {/* Input */}
      <div className="mt-8">
        <Inputs type="phone" />
      </div>

      {/* Button */}
      <Button filled className="w-full mt-12">
        Reset password
      </Button>

      {/* Back To Login */}
      <BackToLogin />
    </form>
  );
};

export default ResetPasswordForm;
