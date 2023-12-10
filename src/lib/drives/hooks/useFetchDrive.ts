import { GetDriveResponse } from "../drives.types";
import { useQuery } from "@tanstack/react-query";
import { Car } from "../../cars";
import axios from "axios";

type Props = {
  drive_id?: number;
  car?: Car;
};

const useFetchDrive = ({ car, drive_id }: Props) => {
  return useQuery({
    queryKey: ["drives", car?.car_id, drive_id],
    queryFn: async () => {
      if (!car || !drive_id) return;

      const { data } = await axios.get<GetDriveResponse>(
        `http://localhost:3000/api/v1/cars/${car.car_id}/drives/${drive_id}/`
      );
      return data;
    },
  });
};

export { useFetchDrive };
