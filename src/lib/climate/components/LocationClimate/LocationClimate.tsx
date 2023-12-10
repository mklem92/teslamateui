import React, { useContext } from "react";
import { Card } from "../../../../components/Card/Card";
import { GlobalContext } from "../../../../context/global.context";
import { useFetchCarStatus } from "../../../status";
import { useFetchWeather } from "../../hooks/useFetchWeather";

type Props = {
  title?: string;
  className?: string;
};

const LocationClimate: React.FC<Props> = ({
  title = "Location",
  className = "w-1/3",
}) => {
  const { car } = useContext(GlobalContext);
  const { data } = useFetchCarStatus({ car });
  const { data: weather } = useFetchWeather({
    status: data,
    units: data?.data.units.unit_of_temperature === "C" ? "metric" : "imperial",
  });

  return (
    <Card
      title={weather?.name || title}
      content={`${weather?.main?.temp?.toFixed()}°${
        data?.data.units.unit_of_temperature
      }`}
      endContent={
        weather?.weather?.[0] ? (
          <img
            src={`http://openweathermap.org/img/w/${weather?.weather?.[0].icon}.png`}
            alt={weather?.weather?.[0].main}
            title={weather?.weather?.[0].main}
          />
        ) : undefined
      }
      className={className}
      onClick={
        weather?.id
          ? () => window.open(`https://openweathermap.org/city/${weather.id}`)
          : undefined
      }
    />
  );
};

export { LocationClimate };
