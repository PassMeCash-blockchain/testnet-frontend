import { conditionalClass } from "./libraries";

const Input = ({ onChange, className, type }) => {
  const basicInputClasses = "bg-[#F5F5F5] rounded-md px-5 py-3";
  switch (type) {
    case "":

    default:
      return (
        <div className="grid gap-2">
          <label htmlFor="">Name on card</label>
          <input
            type="text"
            placeholder="Type in the name on the card"
            className={conditionalClass(basicInputClasses)}
          />
        </div>
      );
  }
};

export default Input;
