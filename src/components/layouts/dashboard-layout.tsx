import { Outlet } from "react-router-dom";

import Navbar from "../dashboard/navbar";

const DashboardLayout = () => {
  return (
    <div className="h-screen w-full overflow-hidden">
      <Navbar />
      <div className="h-[calc(100vh-64px)] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
