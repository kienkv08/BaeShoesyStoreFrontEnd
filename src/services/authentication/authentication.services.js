import HttpService from "../../core/services/http/http.service";

const register = async (data, navigate) => {
  return HttpService.post("/auth/register", { body: { ...data } });
};

const login = async (data, navigate) => {
  return HttpService.post("/auth/login", { body: { ...data } });
};

export { register, login };
