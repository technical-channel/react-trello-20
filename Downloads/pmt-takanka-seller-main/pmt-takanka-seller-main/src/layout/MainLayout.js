import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/Buyerdashboard/DashboardHeader/DashboardHeader";
import Sidebar from "../components/Buyerdashboard/SideBar/Sidebar";
import BuyerDashboardFooter from "../components/Buyerdashboard/BuyerDashboardFooter";

function MainLayout() {
  return (
    <>
      <div className="flex w-full h-[100vh]">
        <Sidebar />
        <div className="w-full lg:ml-[250px] bg-cyan flex flex-col">
          <DashboardHeader />
          <Outlet />
          <BuyerDashboardFooter />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
