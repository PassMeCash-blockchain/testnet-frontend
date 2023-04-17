import React from "react";
import Inputs from "../atoms/Inputs";
import Button from "../atoms/Button";

const PersonalInformationForm = () => {
  return (
    <form>
      <h2 className="text-xl font-semibold text-[#0B011D] text-center md:text-2xl">
        Personal Information
      </h2>
      <p className="text-[#0B011D] text-center mt-6">
        Please fill in your information to make sure your application goes
        smoothly.
      </p>

      {/* Inputs */}
      <div className="grid gap-5 mt-10">
        <Inputs type="text" label="Legal First Name" />
        <Inputs type="text" label="Legal Last Name" />
        <Inputs type="date" label="Birthday" />
        <Inputs type="email" label="Email" />
      </div>

      <Button filled className="w-full mt-10">
        Next
      </Button>
    </form>
  );
};

export default PersonalInformationForm;
