import React, { useContext } from "react";
import { Card } from "../../../../components/Card/Card";
import { GlobalContext } from "../../../../context/global.context";
import { useFetchCarStatus } from "../../../status";
import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";

type Props = {
  title?: string;
  path?: string;
  className?: string;
};

const CarState: React.FC<Props> = ({ path, className = "w-full" }) => {
  const { car } = useContext(GlobalContext);
  const { data } = useFetchCarStatus({ car });
  const navigate = useNavigate();

  return (
    <Card
      content={`${data?.data?.status?.state}`}
      endContent={
        data?.data.status.state_since ? (
          <div className="text-color-text-primary text-md font-semibold">
            {DateTime.now()
              .diff(DateTime.fromISO(data?.data.status.state_since), [
                "hours",
                "minutes",
              ])
              .toFormat("h'h' m'm")}
          </div>
        ) : undefined
      }
      className={className}
      onClick={path ? () => navigate(path) : undefined}
    />
  );
};

export { CarState };
