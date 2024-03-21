import React, { useEffect } from "react";
import { toast } from "react-toastify";
import useObservable from "../../../core/hooks/useObservable.hooks";
import { updateUser } from "../../../services/authentication/authentication.services";
import { createRechargeHistory } from "../../../services/payment/payment.service";
import { useLocation, useNavigate } from "react-router-dom";

const Success = () => {
  const { subscribeOnce } = useObservable();
  let userLocal = localStorage.getItem("user");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const amount = searchParams.get("amount");
    const orderCode = searchParams.get("orderCode");
    if (!amount || !orderCode) {
      navigate("/users/profile");
      return;
    }
    createRecharge(amount, orderCode);
  }, []);
  const createRecharge = async (amount, orderId) => {
    subscribeOnce(
      createRechargeHistory({ amount, orderId, status: "true" }),
      (res) => {
        if (res) {
          console.log(amount);
          toast("Payment success!");
          subscribeOnce(updateUser(1, { amount: amount }), (resp) => {
            console.log(resp);
          });
        }
      }
    );
  };
  return <div>Success</div>;
};

export default Success;
