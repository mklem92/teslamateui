import { useQuery } from "@tanstack/react-query";
import { GetCarResponse } from "..";
import axios from "axios";

const useFetchCars = () => {
  return useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      const { data } = await axios.get<GetCarResponse>(
        "http://localhost:3030/api/v1/cars/"
      );
      return data;
    },
  });
};

export { useFetchCars };
