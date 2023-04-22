import Icons from "@/components/atoms/Icons";
import VerificationForm from "@/components/molecules/VerificationForm";

const OTP = () => {
  return (
    <div className="grid place-content-center h-screen page-spacing-x">
      {/* FLOW */}
      <div className="grid grid-cols-[auto_auto_auto] w-max gap-7 mx-auto font-semibold">
        {/* Create Account */}
        <div className="grid items-center gap-2 md:grid-cols-[auto_1fr]">
          <Icons
            icon="check"
            className="text-2xl text-white bg-[#874CF6] p-1 mx-auto rounded-full"
          />
          <p className="text-sm">Create account</p>
        </div>

        {/* Verify Email */}
        <div className="grid items-center gap-2 md:grid-cols-[auto_auto_1fr]">
          <div className="h-[2px] w-40 bg-[#874CF6] hidden md:block"></div>
          <Icons
            icon="check"
            className="text-2xl text-white bg-[#874CF6] p-1 mx-auto rounded-full"
          />
          <p className="text-sm">Verify Email</p>
        </div>

        {/* Start Trading */}
        <div className="grid items-center gap-2 md:grid-cols-[auto_auto_1fr]">
          <div className="h-[2px] w-40 bg-[#874CF6] md-40 hidden md:block"></div>
          <Icons
            icon="check"
            className="text-2xl text-white bg-[#874CF6] p-1 mx-auto rounded-full"
          />
          <p className="text-sm">Start Trading</p>
        </div>
      </div>

      <div className="mt-14">
        <VerificationForm />
      </div>
    </div>
  );
};

export default OTP;
