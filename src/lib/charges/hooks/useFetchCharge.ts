import { GetChargeResponse } from "./../charges.types";
import { useQuery } from "@tanstack/react-query";
import { Car } from "../../cars";
import axios from "axios";

type Props = {
  charge_id: number;
  car: Car;
};

const useFetchCharge = ({ car, charge_id }: Props) => {
  return useQuery({
    queryKey: ["charges", car.car_id, charge_id],
    queryFn: async () => {
      const { data } = await axios.get<GetChargeResponse>(
        `http://localhost:3030/api/v1/cars/${car.car_id}/charges/${charge_id}/`
      );
      return data;
    },
  });
};

export { useFetchCharge };
