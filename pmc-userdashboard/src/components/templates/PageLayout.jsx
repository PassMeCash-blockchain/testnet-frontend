import SideNav from "../organisms/SideNav";

const PageLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-[280px_1fr] h-screen">
      {/* SideNav */}
      <SideNav />

      <div></div>
    </div>
  );
};

export default PageLayout;
