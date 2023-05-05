import { useState } from "react";
import UserProfileInputs from "../atoms/UserProfileInputs";

const UserContactInfo = () => {
  const [name, setName] = useState("Mary Chukwuamaka");
  const [email, setEmail] = useState("Marychukwu@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("+2347022343287");

  const schema = [
    {
      type: "text",
      label: "Display name",
      value: name,
      setValueFn: setName,
      editable: true,
    },
    {
      type: "email",
      label: "Email address",
      value: email,
      setValueFn: setEmail,
      editable: false,
    },
    {
      type: "phone",
      label: "Phone number",
      value: phoneNumber,
      setValueFn: setPhoneNumber,
      editable: true,
    },
  ];
  return (
    <div className="border border-[rgba(179,_179,_179,_0.5)] rounded-md">
      {/* Title */}
      <h3 className="text-xl font-semibold p-5">Contact info</h3>

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

export default UserContactInfo;
