const FundCard = () => {
  return (
    <div className="mt-10">
      <p className="max-w-[689px] mx-auto text-center">
        You have reached the final step.{" "}
        <span className="font-semibold">Fund your account (minimum $5)</span> to
        your card so that you can start using it after activation.
      </p>

      {/* Pick Funding Method */}
      <div className="grid grid-flow-col w-max mx-auto mt-16 gap-8">
        {/* Bank Account*/}
        <div className="border border-[rgba(179,_179,_179,_0.5)] rounded-2xl p-8 w-[353px] cursor-pointer hover:border-[#874CF6]">
          <div className="border-b border-[rgba(179,_179,_179,_0.5)] w-3/4 mx-auto pb-3 hover:border-[#874CF6]">
            <p className="text-center font-semibold">Bank Account</p>
          </div>
          <p className="text-center mt-5">
            Add money in yourcard using your bank account with ease
          </p>
        </div>

        {/* Other Methods */}
        <div className="border border-[rgba(179,_179,_179,_0.5)] rounded-2xl p-8 w-[353px] cursor-pointer hover:border-[#874CF6]">
          <div className="border-b border-[rgba(179,_179,_179,_0.5)] w-1/2 mx-auto pb-3 hover:border-[#874CF6]">
            <p className="text-center font-semibold">Other Methods</p>
          </div>
          <p className="text-center mt-5">
            Load your card from more than 20 types of payment methods
          </p>
        </div>
      </div>

      <button className="text-[#874CF6] block w-max mx-auto mt-16">Skip</button>
    </div>
  );
};

export default FundCard;
