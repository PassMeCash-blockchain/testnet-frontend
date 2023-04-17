import Logo from "../atoms/Logo";
import SideBackground from "../molecules/SideBackground";

const PageLayout = ({ img, title, text, children }) => {
  return (
    <div className="grid h-screen bg-[#FCFCFC] md:grid-cols-[auto_1fr]">
      {/* Form */}
      <div className="max-w-[600px] w-[50vw] h-full mx-auto p-8 grid grid-rows-[auto_1fr] gap-14 lg:p-16">
        <Logo className="mx-auto md:mx-0" />
        {children}
      </div>

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
