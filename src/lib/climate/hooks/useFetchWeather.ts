import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GetCarStatusResponse } from "../../status";

type Props = {
  status?: GetCarStatusResponse;
  units?: "metric" | "imperial";
};

const useFetchWeather = ({ status }: Props) => {
  return useQuery({
    queryKey: ["drives", status?.data.car?.car_id],
    queryFn: async () => {
      if (!status?.data.car) return;

      const { latitude, longitude } = status.data.status.car_geodata;

      const { data } = await axios.get<any>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${
          import.meta.env.VITE_OPEN_WEATHER_MAP_KEY
        }`
      );
      return data;
    },
    staleTime: 60_000,
    refetchInterval: 60_000,
  });
};

export { useFetchWeather };
