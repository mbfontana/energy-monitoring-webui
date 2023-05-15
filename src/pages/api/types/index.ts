export type Appliance = {
  id: number;
  name: string;
};

type Consumption = {
  total: number;
  timeConnected: number;
};

export type ApplianceConsumption = {
  id: number;
  name: string;
  on: boolean;
  lastTimeOn: string;
  power: number;
  consumption: {
    daily: Consumption;
    monthly: Consumption;
  };
};
