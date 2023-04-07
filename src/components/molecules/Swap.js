import React from "react";
import InputField from "../atoms/InputField";

const Swap = () => {
  return (
    <div className="grid grid-cols-2 gap-4 place-items-center h-80">
      <InputField />
      <div>Image</div>
    </div>
  );
};

export default Swap;
