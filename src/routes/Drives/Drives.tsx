import React, { useContext } from "react";
import { GlobalContext } from "../../context/global.context";
import { DateTime } from "luxon";
import { useFetchDrives } from "../../lib/drives";
import { useNavigate } from "react-router-dom";

const Drives: React.FC = () => {
  const { car } = useContext(GlobalContext);
  const { data } = useFetchDrives({ car });
  const navigate = useNavigate();

  return (
    <div>
      <div className="text-4xl font-bold">Drives</div>
      <div>
        {data?.data?.drives.map((drive) => (
          <div
            onClick={() => navigate(`/drives/${drive.drive_id}`)}
            className="p-2 hover:bg-secondary cursor-pointer"
          >
            {DateTime.fromISO(drive.start_date).toFormat("dd/MM/yyyy hh:mm a")}{" "}
            - {DateTime.fromISO(drive.end_date).toFormat("dd/MM/yyyy hh:mm a")}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Drives };
