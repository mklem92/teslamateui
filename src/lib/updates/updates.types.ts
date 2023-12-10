export type GetCarUpdatesResponse = {
  data: Data;
};

export type Data = {
  car: Car;
  updates: Update[];
};

export type Car = {
  car_id: number;
  car_name: string;
};

export type Update = {
  update_id: number;
  start_date: string;
  end_date: string;
  version: string;
};
