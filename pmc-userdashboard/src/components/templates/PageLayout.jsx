import Header from "../organisms/Header";
import SideNav from "../organisms/SideNav";

const PageLayout = ({ children }) => {
  return (
    <div className="grid h-screen lg:grid-cols-[280px_1fr]">
      {/* SideNav */}
      <SideNav />

      <div className="grid grid-rows-[auto_1fr] overflow-hidden">
        {/* Header */}
        <Header />

        {/* Page Contents */}
        <div className="h-full px-4 py-10 overflow-auto custom-scroll md:p-10 ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
