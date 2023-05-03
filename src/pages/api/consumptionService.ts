import api from "./api";
import { Appliance, ApplianceConsumption } from "./types";

const consumptionService = {
  getAppliances: () => api.get<Appliance[]>(`/appliances`),
  getConsumptionById: (id: number) =>
    api.get<ApplianceConsumption>(`/consumption/${id}`),
};

export default consumptionService;
