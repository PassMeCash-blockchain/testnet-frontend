import Inputs from "../atoms/Inputs";
import Button from "../atoms/Button";
import { useState } from "react";
import { personalThunk } from "@/features/reducers/auth";

const PersonalInformationForm = () => {
    const [first_name, setFirstName] = useState("");
    const [last_nme, setLastName] = useState("");
    const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  
  const handledSubmit = () => {
    e.preventDefault();

    dispatch(personalThunk({ first_name, last_nme, dob, email }));
  }
  return (
    <form onSubmit={handledSubmit} className="grid grid-rows-[auto_1fr_auto] items-start sm:block">
      {/* Description */}
      <div>
        <h2 className="text-xl font-semibold text-[#0B011D] text-center md:text-2xl">
          Personal Information
        </h2>
        <p className="text-[#0B011D] text-center mt-6">
          Please fill in your information to make sure your application goes
          smoothly.
        </p>
      </div>

      {/* Inputs */}
      <div className="grid gap-5 mt-10">
        <Inputs type="text" label="Legal First Name" setValueFn={setFirstName} value={first_name}/>
        <Inputs type="text" label="Legal Last Name" setValueFn={setLastName} value={last_nme}/>
        <Inputs type="date" label="Birthday" setValueFn={setDOB} value={dob}/>
        <Inputs type="email" label="Email" setValueFn={setEmail} value={email}/>
      </div>

      <Button filled className="w-full mt-10">
        Next
      </Button>
    </form>
  );
};

export default PersonalInformationForm;
