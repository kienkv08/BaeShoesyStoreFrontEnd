import HttpService from "../../core/services/http/http.service";

const createTransaction = async (data) => {
  return HttpService.post("/transactions/", { body: { ...data } });
};

export { createTransaction };
