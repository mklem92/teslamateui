import React from "react";
import { InsideClimate, OutsideClimate } from "../../lib/climate/components";
import { LocationClimate } from "../../lib/climate/components/LocationClimate";

const Climate: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 w-full h-full">
      <div className="text-4xl font-bold">Climate</div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-6">
          <InsideClimate />
          <OutsideClimate />
          <LocationClimate />
        </div>
      </div>
    </div>
  );
};

export { Climate };
