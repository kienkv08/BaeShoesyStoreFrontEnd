import HttpService from "../../core/services/http/http.service";

const getCategory = async () => {
  return HttpService.get("/categories");
};

export { getCategory };
