const Modal = ({ children }) => {
  return (
    <div className="grid place-items-center w-screen h-screen top-0 left-0 fixed bg-[rgba(44,_44,_44,_0.2)] z-10">
      {children}
    </div>
  );
};

export default Modal;
