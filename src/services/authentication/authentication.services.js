import HttpService from "../../core/services/http/http.service";

const register = async (data, navigate) => {
  return HttpService.post("/auth/register", { body: { ...data } });
};

const login = async (data, navigate) => {
  return HttpService.post("/auth/login", { body: { ...data } });
};

const getUserById = async (data) => {
  return HttpService.post("/users/information", { body: { ...data } });
};
const updateUser = async (id, data) => {
  return HttpService.post("/users/update", {
    body: { ...data },
  });
};

export { register, login, getUserById, updateUser };
