import HttpService from "../../core/services/http/http.service";

const createProduct = async (data) => {
  return HttpService.post("/products/create/", { body: { ...data } });
};

const getProducts = async (data) => {
  return HttpService.post("/products/", { body: { ...data } });
};

export { createProduct, getProducts };
