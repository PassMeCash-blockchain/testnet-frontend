import { conditionalClass } from "../atoms/libraries";

const Modal = ({ children, className }) => {
  return (
    <div
      className={conditionalClass(
        "px-4 fixed top-0 left-0 z-50 w-screen h-screen bg-[rgba(0,_0,_0,_0.2)] grid md:grid-cols-[auto_1fr]",
        className
      )}
    >
      <div className="max-w-[600px] grid place-items-center w-full h-full mx-auto md:w-[50vw]">
        <div className="w-full max-w-sm min-h-[200px] bg-[#FCFCFC] rounded-md p-7">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
