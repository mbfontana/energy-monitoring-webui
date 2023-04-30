import api from "./api";

const consumptionService = {
  getConsumptionById: async (id: number) => {
    const res = await api.get(`/consume/${id}`).catch((error) => {
      return error.response;
    });
    return res;
  },
};

export default consumptionService;
