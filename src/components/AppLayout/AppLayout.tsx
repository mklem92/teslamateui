import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "../SideBar/SideBar";

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-row w-[100vw] h-[100vh] overflow-hidden">
      <SideBar />
      <div className="px-36 py-12 overflow-auto w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};

export { AppLayout };
