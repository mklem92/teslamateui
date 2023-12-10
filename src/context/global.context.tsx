import React, { PropsWithChildren, useState } from "react";
import { BatteryMetric } from "./global.types";
import { Car } from "../lib/cars";

type GlobalContextType = {
  car?: Car;
  batteryMetric: BatteryMetric;
  setBatteryMetric: React.Dispatch<React.SetStateAction<BatteryMetric>>;
  setCar: React.Dispatch<React.SetStateAction<Car | undefined>>;
};

const GlobalContext = React.createContext<GlobalContextType>({
  car: undefined,
  batteryMetric: "percentage",
  setBatteryMetric: () => {},
  setCar: () => {},
});

const GlobalContextProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [car, setCar] = useState<Car>();
  const [batteryMetric, setBatteryMetric] =
    useState<BatteryMetric>("percentage");

  return (
    <GlobalContext.Provider
      value={{ car, batteryMetric, setBatteryMetric, setCar }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider, GlobalContext };
