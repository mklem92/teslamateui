import React, { useContext } from "react";
import { Card } from "../../../../components/Card/Card";
import { GlobalContext } from "../../../../context/global.context";
import { useFetchCarStatus } from "../../../status";
import { useNavigate } from "react-router-dom";

type Props = {
  title?: string;
  path?: string;
  className?: string;
};

const OutsideClimate: React.FC<Props> = ({
  title = "Exterior",
  path,
  className = "w-1/3",
}) => {
  const { car } = useContext(GlobalContext);
  const { data } = useFetchCarStatus({ car });
  const navigate = useNavigate();

  return (
    <Card
      title={title}
      content={`${data?.data?.status?.climate_details?.outside_temp.toString()}°${
        data?.data.units.unit_of_temperature
      }`}
      className={className}
      onClick={path ? () => navigate(path) : undefined}
    />
  );
};

export { OutsideClimate };
