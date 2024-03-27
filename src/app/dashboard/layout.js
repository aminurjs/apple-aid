import Menubar from "@/components/dashboard/Menubar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-[calc(100vh-100px)] max-w-screen-xl mx-auto border-gray-200 border">
      <div className=" bg-white flex-grow-0">
        <Menubar />
      </div>
      <div className="flex-grow bg-stone-100 h-full  overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
