import React from "react";
import { TirePosition, TirePressure } from "../../lib/tires/components";

const Tires: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 w-full h-full">
      <div className="text-4xl font-bold">Tires</div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-6">
          <TirePressure
            title="Front Left"
            position={TirePosition.FrontLeft}
            className="w-1/2"
          />

          <TirePressure
            title="Front Right"
            position={TirePosition.FrontRight}
            className="w-1/2"
          />
        </div>
        <div className="flex flex-row gap-6">
          <TirePressure
            title="Rear Left"
            position={TirePosition.RearLeft}
            className="w-1/2"
          />

          <TirePressure
            title="Rear Right"
            position={TirePosition.RearRight}
            className="w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export { Tires };
