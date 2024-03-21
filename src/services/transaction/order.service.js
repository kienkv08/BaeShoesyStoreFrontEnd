import HttpService from "../../core/services/http/http.service";

const createOrder = async (data) => {
  return HttpService.post("/orders/create", { body: { ...data } });
};

const getOrder = async (data) => {
  return HttpService.post("/orders/", { body: { ...data } });
};

const updateOrder = async (id, data) => {
  return HttpService.post("/orders/update/" + id, { body: { ...data } });
};

export { createOrder, getOrder, updateOrder };
