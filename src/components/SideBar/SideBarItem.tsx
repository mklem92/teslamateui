import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  title: string;
  icon?: React.ReactNode;
  path: string;
};

const SideBarItem: React.FC<Props> = ({ title, icon, path }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const selected = useMemo(
    () => location.pathname === path,
    [path, location.pathname]
  );

  return (
    <div
      className={`flex flex-row items-center gap-3 p-2 hover:bg-secondary rounded-md cursor-pointer ${
        selected ? "bg-selected " : ""
      }`}
      onClick={() => navigate(path)}
    >
      {icon ?? <div className="h-4 w-4"></div>}
      <div className={`text-xs ${selected ? "font-semibold" : "font-normal"}`}>
        {title}
      </div>
    </div>
  );
};

export { SideBarItem };
