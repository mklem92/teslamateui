import React from "react";
import { useFetchCarStatus } from "../..";
import { Car } from "../../../cars/car.types";

type Props = {
  car: Car;
};

const CarStatus: React.FC<Props> = ({ car }) => {
  const { data } = useFetchCarStatus({ car });

  return (
    <div className="text-[#848687] text-sm font-semibold cursor-pointer">
      {data?.data.status.state}
    </div>
  );
};

export { CarStatus };
