import React from "react";

const FormInput = () => {
  return (
    <div className="flex p-10">
      <label className="relative cursor-pointer">
        <input
          type="text"
          placeholder="Input"
          className="h-20 w-96 px-6 text-4xl text-white border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-black placeholder-gray-300 placeholder-opacity-0 transition duration-200"
        />
        <span className="text-4xl text-black bg-white text-opacity-80 absolute left-5 top-5  transition duration-200 input-text">
          Input
        </span>
      </label>
    </div>
  );
};

export default FormInput;
