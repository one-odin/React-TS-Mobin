import { Outlet } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar/Sidebar";

const DashboardPanel = (): JSX.Element => {
  return (
    <>
      <div className="flex bg-gray-50 gap-10 py-14 px-20">
        <div className="flex-auto w-1/5">
          <Sidebar />
        </div>
        <div className="flex-auto w-4/5 bg-white h-[calc(100vh-7rem)] overflow-auto rounded-2xl border-2 border-gray-200 p-12">
          {/* All of pages will render at this tag */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardPanel;
