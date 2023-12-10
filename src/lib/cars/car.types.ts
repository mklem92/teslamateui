export type GetCarResponse = {
  data: Data;
};

export type Data = {
  cars: Car[] | null;
};

export type CarDetails = {
  eid: number;
  vid: number;
  vin: string;
  model: string;
  trim_badging: string;
  efficiency: number;
};

export type CarExterior = {
  exterior_color: string;
  spoiler_type: string;
  wheel_type: string;
};

export type CarSettings = {
  suspend_min: number;
  suspend_after_idle_min: number;
  req_not_unlocked: boolean;
  free_supercharging: boolean;
  use_streaming_api: boolean;
};

export type TeslamateDetails = {
  inserted_at: string;
  updated_at: string;
};

export type TeslamateStats = {
  total_charges: number;
  total_drives: number;
  total_updates: number;
};

export type Car = {
  car_id: number;
  name: string;
  car_details: CarDetails;
  car_exterior: CarExterior;
  car_settings: CarSettings;
  teslamate_details: TeslamateDetails;
  teslamate_stats: TeslamateStats;
};
