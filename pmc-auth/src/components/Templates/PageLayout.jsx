<<<<<<< HEAD
import SideBackground from "../molecules/SideBackground";

const PageLayout = ({ img, title, text, children: form }) => {
  return (
    <div className="grid h-screen bg-[#FCFCFC] md:grid-cols-[auto_1fr]">
      {/* Form */}
      <div className="max-w-[540px] w-full h-full mx-auto">{form}</div>
=======
import Logo from "../atoms/Logo";
import SideBackground from "../molecules/SideBackground";

const PageLayout = ({ img, title, text, children }) => {
  return (
    <div className="grid h-screen bg-[#FCFCFC] md:grid-cols-[auto_1fr]">
      {/* Form */}
      <div className="max-w-[600px] w-full h-full p-8 grid grid-rows-[auto_1fr] gap-6 md:w-[50vw] md:gap-12 lg:p-16">
        <Logo className="mx-auto md:mx-0" />
        {children}
      </div>
>>>>>>> origin/main

      {/* Side Background */}
      <SideBackground
        img={img}
        title={title}
        text={text}
        className="hidden md:grid"
      />
    </div>
  );
};

export default PageLayout;
