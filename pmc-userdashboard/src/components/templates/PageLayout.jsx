import Header from "../organisms/Header";

const PageLayout = ({ children }) => {
  return (
    <div className="grid grid-rows-[auto_1fr] overflow-hidden h-screen">
      {/* Header */}
      <Header />

      {/* Page Contents */}
      <div className="h-full px-4 py-10 overflow-auto custom-scroll md:p-10 p">
        <div className="w-full max-w-5xl mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
