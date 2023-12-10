import React, { useContext } from "react";
import { GlobalContext } from "../../context/global.context";
import { useFetchCarStatus } from "../../lib/status";
import { Card } from "../../components/Card/Card";

const Battery: React.FC = () => {
  const { car } = useContext(GlobalContext);
  const { data } = useFetchCarStatus({ car });

  return (
    <div className="flex flex-col gap-8 w-full h-full">
      <div className="text-4xl font-bold">Battery</div>

      <div className="flex flex-col gap-6">
        <Card
          title="Charging State"
          content="Charging Stopped"
          className="w-full"
        />
        <div className="flex flex-row gap-6">
          <Card
            title="Level"
            content={`${data?.data?.status?.battery_details?.battery_level.toString()}%`}
            className="w-2/5"
          />
          <Card
            title="Usable"
            content={`${data?.data?.status?.battery_details.usable_battery_level.toFixed(
              0
            )}%`}
            className="w-2/5"
          />
          <Card
            title="Charge Limit"
            content={`${data?.data?.status?.charging_details.charge_limit_soc.toString()}%`}
            className="w-full"
          />
        </div>
        <div className="flex flex-row gap-6">
          <Card
            title="Range"
            content={`${data?.data?.status?.battery_details?.rated_battery_range.toFixed(
              0
            )} ${data?.data.units.unit_of_length}`}
            className="w-1/3"
          />
          <Card
            title="Real-World Range"
            content={`${data?.data?.status?.battery_details?.ideal_battery_range.toFixed(
              0
            )} ${data?.data.units.unit_of_length}`}
            className="w-1/3"
          />
          <Card title="Phantom Drain" content={`0%`} className="w-1/3" />
        </div>
      </div>
    </div>
  );
};

export { Battery };
