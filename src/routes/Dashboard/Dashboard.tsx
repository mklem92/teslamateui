import React from "react";
import { BatteryLevel } from "../../lib/battery/components/BatteryLevel";
import { InsideClimate } from "../../lib/climate/components/InsideClimate";
import { TireSummary } from "../../lib/tires/components";
import { CarState } from "../../lib/cars/components/CarState/CarState";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div className="text-4xl font-bold">Dashboard</div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-6">
          <CarState />
        </div>
        <div className="flex flex-row gap-6">
          <BatteryLevel path="/battery" />
          <InsideClimate title="Climate" path="/climate" />
          <TireSummary title="Tires" content="Good" path="/tires" />
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
