import React, { useMemo } from "react";
import { CarSelector } from "../../lib/cars/components/CarSelector/CarSelector";
import {
  CarFront,
  HeartPulse,
  MapPinned,
  ParkingSquare,
  Zap,
} from "lucide-react";
import { SideBarItem } from "./SideBarItem";
import { useLocation } from "react-router-dom";

const dashboardRoutes = ["/", "/battery", "/climate", "/tires"];
const driveRoutes = ["/drives", "/drives/map", "/drives/analytics", "/drives/"];
const chargeRoutes = ["/charges", "/charges/map", "/charges/analytics"];
const idleRoutes = ["/idles", "/idles/map", "/idles/analytics"];

const SideBar: React.FC = () => {
  const location = useLocation();
  const isDashboardRoute = useMemo(
    () => dashboardRoutes.includes(location.pathname),
    [location.pathname]
  );

  const isDriveRoute = useMemo(
    () => driveRoutes.includes(location.pathname),
    [location.pathname]
  );

  const isChargeRoute = useMemo(
    () => chargeRoutes.includes(location.pathname),
    [location.pathname]
  );

  const isIdleRoute = useMemo(
    () => idleRoutes.includes(location.pathname),
    [location.pathname]
  );

  return (
    <div className="bg-card min-w-[15rem] max-w-[15rem] flex flex-col pt-2 justify-between items-center h-full">
      <div className="flex flex-col gap-0 w-full">
        <div className="flex flex-row justify-between items-center px-6 py-3 border-secondary w-full">
          <div className="text-sm text-neutral font-semibold">TeslaMate UI</div>
          <div className="text-xs text-color-text-primary font-thin">Alpha</div>
        </div>
        <CarSelector />
        <div className="pl-4 pr-2 pt-1 pb-2 flex-col flex gap-1">
          <SideBarItem
            path="/"
            icon={<CarFront className="h-4 w-4" />}
            title="Dashboard"
          />
          {isDashboardRoute && (
            <>
              <SideBarItem path="/battery" title="Battery" />
              <SideBarItem path="/climate" title="Climate" />
              <SideBarItem path="/tires" title="Tires" />
            </>
          )}

          <SideBarItem
            path="/drives"
            icon={<MapPinned className="h-4 w-4" />}
            title="Drives"
          />
          {isDriveRoute && (
            <>
              <SideBarItem path="/drives/map" title="Map" />
              <SideBarItem path="/drives/analytics" title="Analytics" />
            </>
          )}

          <SideBarItem
            path="/charges"
            icon={<Zap className="h-4 w-4" />}
            title="Charges"
          />
          {isChargeRoute && (
            <>
              <SideBarItem path="/charges/map" title="Map" />
              <SideBarItem path="/charges/analytics" title="Analytics" />
            </>
          )}

          <SideBarItem
            path="/idles"
            icon={<ParkingSquare className="h-4 w-4" />}
            title="Idles"
          />
          {isIdleRoute && (
            <>
              <SideBarItem path="/idles/map" title="Map" />
              <SideBarItem path="/idles/analytics" title="Analytics" />
            </>
          )}

          <SideBarItem
            path="/battery-health"
            icon={<HeartPulse className="h-4 w-4" />}
            title="Battery Health"
          />
        </div>
      </div>
    </div>
  );
};

export { SideBar };
