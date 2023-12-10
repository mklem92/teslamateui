import React, { useContext, useEffect } from "react";
import { useFetchCars } from "../../hooks/useFetchCars";
import { GlobalContext } from "../../../../context/global.context";
import { Pencil } from "lucide-react";

const CarSelector: React.FC = () => {
  const { car, setCar } = useContext(GlobalContext);
  const { data } = useFetchCars();

  useEffect(() => {
    if (!car) {
      setCar(data?.data?.cars?.[0]);
    }
  }, [data]);

  if (!car) return null;

  return (
    <div className="flex flex-col items-start w-full border-secondary pl-4 pr-2">
      <div className="flex flex-row gap-3 p-2 items-center justify-between w-full hover:bg-secondary rounded-md cursor-pointer">
        <div className="text-xs font-medium text-color-text-primary">
          {car.name}
        </div>
        <Pencil className="h-4 w-4" />
      </div>
    </div>
  );
};

export { CarSelector };
