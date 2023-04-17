import Inputs from "../atoms/Inputs";
import Button from "../atoms/Button";

const ContactInformationForm = () => {
  return (
    <form className="grid grid-rows-[auto_1fr_auto] items-start sm:block">
      {/* Description */}
      <div>
        <h2 className="text-xl font-semibold text-[#0B011D] text-center md:text-2xl">
          Contact Information
        </h2>
        <p className="text-[#0B011D] text-center mt-6">
          Please fill in your information to make sure your application goes
          smoothly.
        </p>
      </div>

      {/* Inputs */}
      <div className="grid gap-5 mt-10">
        <Inputs type="select" label="State" />
        <Inputs type="select" label="LGA" />
        <Inputs type="text" label="Address1" />
        <Inputs type="text" label="Address2" />
      </div>

      <Button filled className="w-full mt-10">
        Next
      </Button>
    </form>
  );
};

export default ContactInformationForm;
