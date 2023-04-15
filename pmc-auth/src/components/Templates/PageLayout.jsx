import SideBackground from "../molecules/SideBackground";

const PageLayout = ({ img, title, text, children: form }) => {
  return (
    <div className="grid grid-cols-[500px_1fr] h-screen bg-[#FCFCFC]">
      {/* Form */}
      {form}

      {/* Side Background */}
      <SideBackground img={img} title={title} text={text} />
    </div>
  );
};

export default PageLayout;
