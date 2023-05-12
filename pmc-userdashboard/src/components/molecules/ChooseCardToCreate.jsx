const ChooseCardToCreate = () => {
  return (
    <div className="mt-10">
      <p className="text-xl text-center italic font-light">
        Choose a virtual card to create.
      </p>

      <div className="grid gap-10 mt-10 w-max mx-auto md:grid-flow-col">
        {/* Naira Card */}
        <div className="border border-[rgba(179,_179,_179,_0.5)] rounded-2xl max-w-xs p-5 cursor-pointer">
          <p className="border-b border-[rgba(179,_179,_179,_0.5)] pb-5 text-center font-semibold">
            Naira Card
          </p>
          <p className="text-neutral-500 text-center mt-5">
            Create a virtual naira card to hold your local currencies and shop
            online
          </p>
        </div>

        {/* Crypto Card */}
        <div className="border border-[rgba(179,_179,_179,_0.5)] rounded-2xl max-w-xs p-5 cursor-pointer">
          <p className="border-b border-[rgba(179,_179,_179,_0.5)] pb-5 text-center font-semibold">
            Crypto Card
          </p>
          <p className="text-neutral-500 text-center mt-5">
            Create a virtual naira card to hold your local currencies and shop
            online
          </p>
        </div>
      </div>

      <p className="text-center text-lg max-w-md mx-auto mt-8 md:mt-16">
        Add a new virtual card to be able to make quick online transactions.
      </p>

      <button className="text-white bg-[#874CF6] py-3 rounded-md w-full max-w-xs block mx-auto mt-8 md:mt-16">
        Create Card
      </button>
    </div>
  );
};

export default ChooseCardToCreate;
