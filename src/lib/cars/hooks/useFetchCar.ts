import { useQuery } from "@tanstack/react-query";
import { GetCarResponse } from "..";
import axios from "axios";

type Props = {
  car_id: number;
};

const useFetchCar = ({ car_id }: Props) => {
  return useQuery({
    queryKey: ["cars", car_id],
    queryFn: async () => {
      const { data } = await axios.get<GetCarResponse>(
        `http://localhost:3000/api/v1/cars/${car_id}/`
      );
      return data;
    },
  });
};

export { useFetchCar };
