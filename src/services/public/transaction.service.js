import HttpService from "../../core/services/http/http.service";

const getTransaction = async () => {
    return HttpService.get("/transactions");
};

export { getTransaction };
