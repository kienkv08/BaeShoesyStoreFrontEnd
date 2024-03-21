import HttpService from "../../core/services/http/http.service";

const getTransaction = async () => {
    return HttpService.get("/transactions");
};
const getTransactionByUserId = async (id) => {
    return HttpService.get("/transactions/users/" + id);
};

export { getTransaction, getTransactionByUserId };
