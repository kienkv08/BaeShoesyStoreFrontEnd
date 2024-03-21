import HttpService from "../../core/services/http/http.service";

const create = async (data) => {
  return HttpService.post("/auctions/", { body: { ...data } });
};

const getByProductId = async (data) => {
  return HttpService.post("/auctions/highestPrice", { body: { ...data } });
};

export { create, getByProductId };
