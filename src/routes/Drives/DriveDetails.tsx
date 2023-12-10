import React, { useContext } from "react";
import { GlobalContext } from "../../context/global.context";
import { useFetchDrive } from "../../lib/drives";
import { useParams } from "react-router-dom";

const DriveDetails: React.FC = () => {
  const params = useParams();
  const { car } = useContext(GlobalContext);
  const { data } = useFetchDrive({ car, drive_id: Number(params?.id) });

  return (
    <div>
      <div className="text-4xl font-bold">Drive Details</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export { DriveDetails };
