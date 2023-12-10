import { GetCarStatusResponse } from "../status.types";
import { useQuery } from "@tanstack/react-query";
import { Car } from "../../cars";
import axios from "axios";

type Props = {
  car?: Car;
};

const useFetchCarStatus = ({ car }: Props) => {
  return useQuery({
    queryKey: ["status", car?.car_id],
    queryFn: async () => {
      if (!car) return;

      const { data } = await axios.get<GetCarStatusResponse>(
        `http://localhost:3000/api/v1/cars/${car.car_id}/status/`
      );
      return data;
    },
  });
};

export { useFetchCarStatus };
