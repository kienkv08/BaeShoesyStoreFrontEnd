import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useTranslation } from "react-i18next";
import useObservable from "../../../core/hooks/useObservable.hooks";
import { register } from "../../../services/authentication/authentication.services";
import { toast } from "react-toastify";
import { REGEX } from "../../../common/constants/global.constant";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { t } = useTranslation();
  const { subscribeOnce } = useObservable();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [phone, setPhone] = useState("");
  const [term, setTerm] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    const data = {
      username,
      email,
      password,
      phone,
    };
    if (!email.match(REGEX.EMAIL)) {
      toast.warning("Email is not correct form!");
      return;
    }
    if (!phone.match(REGEX.PHONE_NUMBER)) {
      toast.warning("Phone is not correct form!");
      return;
    }
    if (!password) {
      toast.warning("Password is required!");
      return;
    }
    if (!rePassword) {
      toast.warning("Re-Password is required!");
      return;
    }
    if (rePassword !== password) {
      toast.warning("Re-Password is not match with password!");
      return;
    }
    if (!term) {
      toast.warning("Please accept our term to register!");
      return;
    }
    subscribeOnce(register(data), (res) => {
      if (!res) return;
      toast("Register successfully!");
      navigate("/login");
    });
  };

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                {t("common.signUp")}
              </p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label={t("common.userName")}
                  id="form1"
                  type="text"
                  className="w-100"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label={t("common.yourEmail")}
                  id="form2"
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                  pattern={REGEX.EMAIL}
                  required
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label={t("common.phone")}
                  id="form5"
                  type="phone"
                  onChange={(event) => setPhone(event.target.value)}
                  required
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput
                  label={t("common.password")}
                  id="form3"
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  label={t("common.rePassword")}
                  id="form4"
                  type="password"
                  onChange={(event) => setRePassword(event.target.value)}
                />
              </div>

              <div className="mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label={t("common.acceptOurTerm")}
                  onClick={() => setTerm(!term)}
                />
              </div>

              <MDBBtn className="mb-4" size="lg" onClick={() => handleSubmit()}>
                {t("common.signUp")}
              </MDBBtn>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://png.pngtree.com/png-clipart/20231016/original/pngtree-watercolor-sneaker-clip-art-png-image_13322237.png"
                className="w-[450px] h-[450px]"
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Register;
