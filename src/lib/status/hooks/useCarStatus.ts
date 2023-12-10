import { useCallback, useContext, useMemo } from "react";
import { GlobalContext } from "../../../context/global.context";
import { useFetchCarStatus } from "./useFetchCarStatus";
import { Car } from "../../cars";

type Props = {
  car: Car;
};

const useCarStatus = ({ car }: Props) => {
  const { batteryMetric, setBatteryMetric } = useContext(GlobalContext);
  const { data } = useFetchCarStatus({ car });

  const batteryPercentage = useMemo(
    () => data?.data.status.battery_details.battery_level,
    [data]
  );

  const batteryRange = useMemo(
    () => data?.data.status.battery_details.est_battery_range || 0,
    [data]
  );

  const isCharging = useMemo(
    () => (data?.data?.status?.charging_details?.charger_power || 0) > 0,
    [data]
  );

  const distanceUnit = useMemo(() => data?.data.units.unit_of_length, [data]);

  const toggleBatteryMetric = useCallback(() => {
    setBatteryMetric((prev) =>
      prev === "distance" ? "percentage" : "distance"
    );
  }, [setBatteryMetric]);

  const batteryValue = useMemo(() => {
    if (batteryMetric === "percentage") {
      return `${batteryPercentage}%`;
    } else {
      return `${batteryRange.toFixed(0)} ${distanceUnit}`;
    }
  }, [batteryPercentage, batteryMetric, batteryRange, distanceUnit]);

  return {
    batteryMetric,
    batteryPercentage,
    batteryRange,
    batteryValue,
    isCharging,
    toggleBatteryMetric,
  };
};

export { useCarStatus };
