const CardPinInput = ({ inputRef }) => {
  let intialValue;
  const handleInput = (e) => {
    if (e.target.value.length > 1) {
      e.target.value = intialValue;
      return;
    }
    intialValue = e.target.value;
  };

  return (
    <input
      type="number"
      className="w-20 h-20 border border-[#874CF6] rounded-md outline-none text-center text-3xl text-[#874CF6]"
      onChange={(e) => handleInput(e)}
      ref={inputRef}
    />
  );
};

export default CardPinInput;
