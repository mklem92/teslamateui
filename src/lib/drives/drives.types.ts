export type GetDriveResponse = {
  data: DriveData;
};

export type DriveData = {
  car: DriveCar;
  drives: Drive[];
  units: Units;
};

export type DriveCar = {
  car_id: number;
  car_name: string;
};

export type Drive = {
  drive_id: number;
  start_date: string;
  end_date: string;
  start_address: string;
  end_address: string;
  odometer_details: OdometerDetails;
  duration_min: number;
  duration_str: string;
  speed_max: number;
  speed_avg: number;
  power_max: number;
  power_min: number;
  battery_details: BatteryDetails;
  range_ideal: RangeIdeal;
  range_rated: RangeRated;
  outside_temp_avg: number;
  inside_temp_avg: number;
};

export type OdometerDetails = {
  odometer_start: number;
  odometer_end: number;
  odometer_distance: number;
};

export type BatteryDetails = {
  start_usable_battery_level: number;
  start_battery_level: number;
  end_usable_battery_level: number;
  end_battery_level: number;
  reduced_range: boolean;
  is_sufficiently_precise: boolean;
};

export type RangeIdeal = {
  start_range: number;
  end_range: number;
  range_diff: number;
};

export type RangeRated = {
  start_range: number;
  end_range: number;
  range_diff: number;
};

export type Units = {
  unit_of_length: string;
  unit_of_temperature: string;
};
