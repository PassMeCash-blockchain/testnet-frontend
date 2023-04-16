import SideBackground from "../molecules/SideBackground";

const PageLayout = ({ img, title, text, children: form }) => {
  return (
    <div className="grid h-screen bg-[#FCFCFC] md:grid-cols-[auto_1fr]">
      {/* Form */}
      <div className="max-w-[540px] w-full h-full mx-auto">{form}</div>

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
