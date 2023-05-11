const CreateCardStepIndicator = () => {
  return (
    <div>
      {/* Texts */}
      <div className="grid grid-cols-[auto_1fr_auto]">
        <p className="text-lg font-medium">Create New Card</p>
        <p className="text-center text-lg font-medium pr-10">Add Pin</p>
        <p className="text-lg font-medium">Fund Card</p>
      </div>

      {/* Circles and Lines */}
      <div className="grid grid-cols-[auto_1fr_auto_1fr_auto] gap-5 w-full pl-[50px] pr-[30px] mt-5 mx-auto items-center">
        <div className="w-4 h-4 rounded-full bg-[#874CF6]"></div>
        <div className="border border-[#874CF6] rounded-full h-[1px]"></div>
        <div className="w-4 h-4 rounded-full bg-[#E0E0E0]"></div>
        <div className="border border-[#E0E0E0] rounded-full h-[1px]"></div>
        <div className="w-4 h-4 rounded-full bg-[#E0E0E0]"></div>
      </div>
    </div>
  );
};

export default CreateCardStepIndicator;
