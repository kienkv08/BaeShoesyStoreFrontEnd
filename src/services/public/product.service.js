import HttpService from "../../core/services/http/http.service";

const createProduct = async (data) => {
  return HttpService.post("/products/create/", { body: { ...data } });
};

const getProducts = async (data) => {
  return HttpService.post("/products/", { body: { ...data } });
};

const getProductById = async (id) => {
  return HttpService.get("/products/" + id);
};

export { createProduct, getProducts, getProductById };
