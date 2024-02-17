import HttpService from "../../core/services/http/http.service";

const register = async (data, navigate) => {
  return HttpService.post("/auth/register", { body: { ...data } });
};

export { register };
