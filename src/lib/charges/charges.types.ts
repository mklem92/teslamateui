export type GetChargeResponse = {
  data: Data;
};

export type Data = {
  car: ChargeCar;
  charges: Charge[];
  units: Units;
};

export type ChargeCar = {
  car_id: number;
  car_name: string;
};

export type Charge = {
  charge_id: number;
  start_date: string;
  end_date: string;
  address: string;
  charge_energy_added: number;
  charge_energy_used: number;
  cost: number;
  duration_min: number;
  duration_str: string;
  battery_details: BatteryDetails;
  range_ideal: RangeIdeal;
  range_rated: RangeRated;
  outside_temp_avg: number;
};

export type BatteryDetails = {
  start_battery_level: number;
  end_battery_level: number;
};

export type RangeIdeal = {
  start_range: number;
  end_range: number;
};

export type RangeRated = {
  start_range: number;
  end_range: number;
};

export type Units = {
  unit_of_length: string;
  unit_of_temperature: string;
};
