import { GetDriveResponse } from "../drives.types";
import { useQuery } from "@tanstack/react-query";
import { Car } from "../../cars";
import axios from "axios";

type Props = {
  car?: Car;
};

const useFetchDrives = ({ car }: Props) => {
  return useQuery({
    queryKey: ["drives", car?.car_id],
    queryFn: async () => {
      if (!car) return;
      const { data } = await axios.get<GetDriveResponse>(
        `http://localhost:3030/api/v1/cars/${car.car_id}/drives`
      );
      return data;
    },
  });
};

export { useFetchDrives };
