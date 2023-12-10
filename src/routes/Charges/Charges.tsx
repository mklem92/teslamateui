import React, { useContext } from "react";
import { useFetchCharges } from "../../lib/charges";
import { GlobalContext } from "../../context/global.context";
import { DateTime } from "luxon";

const Charges: React.FC = () => {
  const { car } = useContext(GlobalContext);
  const { data } = useFetchCharges({ car });

  return (
    <div>
      <div className="text-4xl font-bold">Charges</div>
      <div>
        {data?.data.charges.map((charge) => (
          <div>
            {DateTime.fromISO(charge.start_date).toFormat("dd/MM/yyyy hh:mm a")}{" "}
            - {DateTime.fromISO(charge.end_date).toFormat("dd/MM/yyyy hh:mm a")}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Charges };
