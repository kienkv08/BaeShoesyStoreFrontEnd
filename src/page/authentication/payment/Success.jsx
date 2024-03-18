import React, { useEffect } from "react";
import { toast } from "react-toastify";
import useObservable from "../../../core/hooks/useObservable.hooks";
import { updateUser } from "../../../services/authentication/authentication.services";

const Success = () => {
  const { subscribeOnce } = useObservable();
  let userLocal = localStorage.getItem("user");
  let amount = 0;
  useEffect(() => {
    amount = localStorage.getItem("amount");
    if (userLocal)
      try {
        userLocal = JSON.parse(userLocal);
        console.log(userLocal);
        subscribeOnce(
          updateUser(userLocal._id, { bag: parseFloat(amount) }),
          (res) => {}
        );
      } catch (error) {
        console.error("Error parsing user:", error);
      }
    toast("Payment success!");
  }, []);
  return <div>Success</div>;
};

export default Success;
