import { useState } from "react";
import UserProfileInputs from "../atoms/UserProfileInputs";

const UserPersonalInfo = () => {
  const [legalName, setLegalName] = useState("Mary Chukwuamaka");
  const [homeAddress, setHomeAddress] = useState(
    "70 Aina street aguda surulere, Lagos Surulere 101283 Nigeria"
  );
  const [DOB, setDOB] = useState("June 15th, 2000");

  const schema = [
    {
      type: "text",
      label: "Legal name",
      value: legalName,
      setValueFn: setLegalName,
      editable: true,
    },
    {
      type: "text",
      label: "Home address",
      value: homeAddress,
      setValueFn: setHomeAddress,
      editable: true,
    },
    {
      type: "date",
      label: "Date of birth",
      value: DOB,
      setValueFn: setDOB,
      editable: true,
    },
  ];

  return (
    <div className="border border-[rgba(179,_179,_179,_0.5)] rounded-md">
      {/* Title */}
      <h3 className="text-xl font-semibold p-5">Personal info</h3>

      {/* Info */}
      {schema.map((input, i) => (
        <div key={i} className="p-5 border-t border-[rgba(179,_179,_179,_0.5)]">
          <UserProfileInputs
            type={input.type}
            label={input.label}
            value={input.value}
            setValueFn={input.setValueFn}
            editable={input.editable}
          />
        </div>
      ))}
    </div>
  );
};

export default UserPersonalInfo;
