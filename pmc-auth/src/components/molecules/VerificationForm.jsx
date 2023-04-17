import Button from "../atoms/Button";
import Inputs from "../atoms/Inputs";

const VerificationForm = () => {
  const numberOFInputOTP = 6;
  return (
    <div className="grid gap-6">
      <h2 className="text-center text-xl font-medium">
        Verify Your Phone Number
      </h2>
      <p className="text-sm text-[#B3B3B3] text-center">
        Enter the code we’ve sent to{" "}
        <span className="text-[#0B011D] font-bold">+23481*******781.</span>{" "}
        Didn’t receive the coe?
      </p>
      <p className="text-[#0B011D] font-semibold text-center">Enter Code</p>

      <div className="flex space-x-4 w-max mx-auto md:space-x-8">
        {[...Array(numberOFInputOTP)].map((e, i) => (
          <Inputs type="otp" />
        ))}
      </div>

      <p className="text-[#B3B3B3] text-center font-semibold">
        Code valid for 30 minutes
      </p>
      <p className="text-[#0B011D] text-center font-semibold">Resend code</p>
      <Button filled className="w-full max-w-md mx-auto mt-20 block">
        Verify
      </Button>
    </div>
  );
};

export default VerificationForm;
