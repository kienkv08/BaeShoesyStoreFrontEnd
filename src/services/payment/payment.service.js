import HttpService from "../../core/services/http/http.service";

const createPaymentService = async (data) => {
  return HttpService.post("/payment/create-payment-link", {
    body: { ...data },
  });
};

const createRechargeHistory = async (data) => {
  return HttpService.post("/payment/create", {
    body: { ...data },
  });
};

export { createPaymentService, createRechargeHistory };
