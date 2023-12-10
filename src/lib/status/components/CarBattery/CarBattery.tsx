import React from "react";
import { Car } from "../../../cars/car.types";
import { useCarStatus } from "../../hooks/useCarStatus";

type Props = {
  car: Car;
};

const CarBattery: React.FC<Props> = ({ car }) => {
  const { isCharging, batteryValue, batteryPercentage, toggleBatteryMetric } =
    useCarStatus({
      car,
    });

  return (
    <div className="flex flex-row gap-2 items-center">
      <div className="flex flex-row gap-[2px] items-center">
        <div className="bg-secondary rounded-sm w-[45px] h-[20px] flex p-[4px]">
          <div
            className={`${
              isCharging ? "bg-success" : "bg-neutral"
            } rounded-sm h-full`}
            style={{ width: `${batteryPercentage}%` }}
          />
        </div>
        <div className={"bg-secondary rounded-r-sm w-[5px] h-[10px]"} />
      </div>
      <div
        onClick={toggleBatteryMetric}
        className={`${
          isCharging ? "text-success" : "text-neutral"
        } text-sm font-semibold cursor-pointer`}
      >
        {batteryValue}
      </div>
    </div>
  );
};

export { CarBattery };
