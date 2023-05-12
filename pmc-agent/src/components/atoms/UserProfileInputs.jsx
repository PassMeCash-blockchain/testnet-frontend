import React, { useEffect, useRef, useState } from "react";

const UserProfileInputs = ({
  type,
  label,
  placeholder,
  value,
  setValueFn,
  editable,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const input = useRef(null);

  useEffect(() => {
    isEdit && input.current.focus();
  }, [isEdit]);

  switch (type) {
    case "phone":
      return (
        <div className="grid gap-3 md:grid-cols-[2fr_5fr] md:gap-10">
          {/* Label */}
          <h4 className="font-semibold">{label}</h4>

          <div className="bg-[#F5F5F5] rounded-md grid px-5 py-3 grid-cols-[1fr_auto] items-center gap-10 md:bg-transparent md:p-0">
            {/* Input */}
            {isEdit ? (
              <input
                type="tel"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValueFn(e.target.value)}
                className="outline-none bg-transparent"
                ref={input}
              />
            ) : (
              <p>{value}</p>
            )}

            {/* Edit or Save */}
            {editable &&
              (isEdit ? (
                <button
                  className="border border-[#777] px-3 py-1 rounded-md cursor-pointer justify-self-end"
                  onClick={() => setIsEdit(false)}
                >
                  Save
                </button>
              ) : (
                <button
                  className="border border-[#777] px-3 py-1 rounded-md cursor-pointer justify-self-end"
                  onClick={() => setIsEdit(true)}
                >
                  Edit
                </button>
              ))}
          </div>
        </div>
      );

    default:
      return (
        <div className="grid gap-3 md:grid-cols-[2fr_5fr] md:gap-10">
          {/* Label */}
          <h4 className="font-semibold">{label}</h4>

          <div className="bg-[#F5F5F5] rounded-md grid px-5 py-3 grid-cols-[1fr_auto] gap-10 items-center md:bg-transparent md:p-0">
            {/* Input */}
            {isEdit ? (
              <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValueFn(e.target.value)}
                className="outline-none bg-transparent"
                ref={input}
              />
            ) : (
              <p>{value}</p>
            )}

            {/* Edit or Save */}
            {editable &&
              (isEdit ? (
                <button
                  className="border border-[#777] px-3 py-1 rounded-md cursor-pointer justify-self-end"
                  onClick={() => setIsEdit(false)}
                >
                  Save
                </button>
              ) : (
                <button
                  className="border border-[#777] px-3 py-1 rounded-md cursor-pointer justify-self-end"
                  onClick={() => setIsEdit(true)}
                >
                  Edit
                </button>
              ))}
          </div>
        </div>
      );
      break;
  }
};

export default UserProfileInputs;
