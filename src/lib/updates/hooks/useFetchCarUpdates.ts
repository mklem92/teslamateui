import { GetCarUpdatesResponse } from "../updates.types";
import { useQuery } from "@tanstack/react-query";
import { Car } from "../../cars";
import axios from "axios";

type Props = {
  car: Car;
};

const useFetchCarUpdates = ({ car }: Props) => {
  return useQuery({
    queryKey: ["updates", car.car_id],
    queryFn: async () => {
      const { data } = await axios.get<GetCarUpdatesResponse>(
        `http://localhost:3030/api/v1/cars/${car.car_id}/updates/`
      );
      return data;
    },
  });
};

export { useFetchCarUpdates };
