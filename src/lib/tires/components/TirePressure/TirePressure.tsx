import React, { useContext, useMemo } from "react";
import { Card } from "../../../../components/Card/Card";
import { GlobalContext } from "../../../../context/global.context";
import { useFetchCarStatus } from "../../../status";
import { useNavigate } from "react-router-dom";

export enum TirePosition {
  FrontLeft = "tpms_pressure_fl",
  FrontRight = "tpms_pressure_fr",
  RearLeft = "tpms_pressure_rl",
  RearRight = "tpms_pressure_rr",
}

type Props = {
  title?: string;
  position: TirePosition;
  path?: string;
  className?: string;
};

const TirePressure: React.FC<Props> = ({
  title = "Pressure",
  position,
  path,
  className = "w-1/2",
}) => {
  const { car } = useContext(GlobalContext);
  const { data } = useFetchCarStatus({ car });
  const navigate = useNavigate();

  const psi = useMemo(() => {
    const pressure = data?.data.status.tpms_details?.[position];
    if (!pressure) return undefined;

    return pressure * 14.5038;
  }, [data]);

  return (
    <Card
      title={title}
      content={psi ? `${psi?.toFixed(0)} PSI` : "Error"}
      className={className}
      onClick={path ? () => navigate(path) : undefined}
    />
  );
};

export { TirePressure };
