import { GetChargeResponse } from "../charges.types";
import { useQuery } from "@tanstack/react-query";
import { Car } from "../../cars";
import axios from "axios";

type Props = {
  car?: Car;
};

const useFetchCharges = ({ car }: Props) => {
  return useQuery({
    queryKey: ["charges", car?.car_id],
    queryFn: async () => {
      if (!car) return;

      const { data } = await axios.get<GetChargeResponse>(
        `http://localhost:3030/api/v1/cars/${car.car_id}/charges`
      );
      return data;
    },
  });
};

export { useFetchCharges };
