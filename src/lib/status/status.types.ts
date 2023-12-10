export type GetCarStatusResponse = {
  data: Data;
};

export type Data = {
  car: StatusCar;
  status: Status;
  units: Units;
};

export type StatusCar = {
  car_id: number;
  car_name: string;
};

export type Status = {
  display_name: string;
  state: string;
  state_since: string;
  odometer: number;
  car_status: CarStatus;
  car_details: CarDetails;
  car_exterior: CarExterior;
  car_geodata: CarGeodata;
  car_versions: CarVersions;
  driving_details: DrivingDetails;
  climate_details: ClimateDetails;
  battery_details: BatteryDetails;
  charging_details: ChargingDetails;
  tpms_details: TpmsDetails;
};

export type CarStatus = {
  healthy: boolean;
  locked: boolean;
  sentry_mode: boolean;
  windows_open: boolean;
  doors_open: boolean;
  trunk_open: boolean;
  frunk_open: boolean;
  is_user_present: boolean;
};

export type CarDetails = {
  model: string;
  trim_badging: string;
};

export type CarExterior = {
  exterior_color: string;
  spoiler_type: string;
  wheel_type: string;
};

export type CarGeodata = {
  geofence: string;
  latitude: number;
  longitude: number;
};

export type CarVersions = {
  version: string;
  update_available: boolean;
  update_version: string;
};

export type DrivingDetails = {
  shift_state: string;
  power: number;
  speed: number;
  heading: number;
  elevation: number;
};

export type ClimateDetails = {
  is_climate_on: boolean;
  inside_temp: number;
  outside_temp: number;
  is_preconditioning: boolean;
};

export type BatteryDetails = {
  est_battery_range: number;
  rated_battery_range: number;
  ideal_battery_range: number;
  battery_level: number;
  usable_battery_level: number;
};

export type ChargingDetails = {
  plugged_in: boolean;
  charge_energy_added: number;
  charge_limit_soc: number;
  charge_port_door_open: boolean;
  charger_actual_current: number;
  charger_phases: number;
  charger_power: number;
  charger_voltage: number;
  charge_current_request: number;
  charge_current_request_max: number;
  scheduled_charging_start_time: string;
  time_to_full_charge: number;
};

export type TpmsDetails = {
  tpms_pressure_fl: number;
  tpms_pressure_fr: number;
  tpms_pressure_rl: number;
  tpms_pressure_rr: number;
};

export type Units = {
  unit_of_length: string;
  unit_of_temperature: string;
};
