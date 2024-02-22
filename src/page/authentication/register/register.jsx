// import React, { useState } from "react";
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBInput,
//   MDBIcon,
//   MDBCheckbox,
// } from "mdb-react-ui-kit";
// import { useTranslation } from "react-i18next";
// import useObservable from "../../../core/hooks/useObservable.hooks";
// import { register } from "../../../services/authentication/authentication.services";
// import { toast } from "react-toastify";
// import { REGEX } from "../../../common/constants/global.constant";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const { t } = useTranslation();
//   const { subscribeOnce } = useObservable();
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rePassword, setRePassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [term, setTerm] = useState(false);
//   const navigate = useNavigate();
//   const handleSubmit = () => {
//     const data = {
//       username,
//       email,
//       password,
//       phone,
//     };
//     if (!email.match(REGEX.EMAIL)) {
//       toast.warning("Email is not correct form!");
//       return;
//     }
//     if (!phone.match(REGEX.PHONE_NUMBER)) {
//       toast.warning("Phone is not correct form!");
//       return;
//     }
//     if (!password) {
//       toast.warning("Password is required!");
//       return;
//     }
//     if (!rePassword) {
//       toast.warning("Re-Password is required!");
//       return;
//     }
//     if (rePassword !== password) {
//       toast.warning("Re-Password is not match with password!");
//       return;
//     }
//     if (!term) {
//       toast.warning("Please accept our term to register!");
//       return;
//     }
//     subscribeOnce(register(data), (res) => {
//       if (!res) return;
//       toast("Register successfully!");
//       navigate("/login");
//     });
//   };

//   return (
//     <MDBContainer fluid>
//       <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
//         <MDBCardBody>
//           <MDBRow>
//             <MDBCol
//               md="10"
//               lg="6"
//               className="order-2 order-lg-1 d-flex flex-column align-items-center"
//             >
//               <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
//                 {t("common.signUp")}
//               </p>

//               <div className="d-flex flex-row align-items-center mb-4 ">
//                 <MDBIcon fas icon="user me-3" size="lg" />
//                 <MDBInput
//                   label={t("common.userName")}
//                   id="form1"
//                   type="text"
//                   className="w-100"
//                   onChange={(event) => setUsername(event.target.value)}
//                 />
//               </div>

//               <div className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="envelope me-3" size="lg" />
//                 <MDBInput
//                   label={t("common.yourEmail")}
//                   id="form2"
//                   type="email"
//                   onChange={(event) => setEmail(event.target.value)}
//                   pattern={REGEX.EMAIL}
//                   required
//                 />
//               </div>
//               <div className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="envelope me-3" size="lg" />
//                 <MDBInput
//                   label={t("common.phone")}
//                   id="form5"
//                   type="phone"
//                   onChange={(event) => setPhone(event.target.value)}
//                   required
//                 />
//               </div>

//               <div className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="lock me-3" size="lg" />
//                 <MDBInput
//                   label={t("common.password")}
//                   id="form3"
//                   type="password"
//                   onChange={(event) => setPassword(event.target.value)}
//                 />
//               </div>

//               <div className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="key me-3" size="lg" />
//                 <MDBInput
//                   label={t("common.rePassword")}
//                   id="form4"
//                   type="password"
//                   onChange={(event) => setRePassword(event.target.value)}
//                 />
//               </div>

//               <div className="mb-4">
//                 <MDBCheckbox
//                   name="flexCheck"
//                   value=""
//                   id="flexCheckDefault"
//                   label={t("common.acceptOurTerm")}
//                   onClick={() => setTerm(!term)}
//                 />
//               </div>

//               <MDBBtn className="mb-4" size="lg" onClick={() => handleSubmit()}>
//                 {t("common.signUp")}
//               </MDBBtn>
//             </MDBCol>

//             <MDBCol
//               md="10"
//               lg="6"
//               className="order-1 order-lg-2 d-flex align-items-center"
//             >
//               <MDBCardImage
//                 src="https://png.pngtree.com/png-clipart/20231016/original/pngtree-watercolor-sneaker-clip-art-png-image_13322237.png"
//                 className="w-[450px] h-[450px]"
//               />
//             </MDBCol>
//           </MDBRow>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBContainer>
//   );
// };

// export default Register;
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import useObservable from "../../../core/hooks/useObservable.hooks";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRepassword] = useState("");
  const [term, setTerm] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!term) {
      toast.warning("Please accept our term to register!");
      return;
    }
    if (!password) {
      toast.warning("Password is required!");
      return;
    }
    if (!email) {
      toast.warning("Email is required!");
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
    const user = {
      username: username,
      password: password,
      rePassword: rePassword,
      email: email,
    };
  };
  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center vw-full">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center w-full">
            <Link to="/" className="text-gray-700">
              {t("common.pageName")}
            </Link>
          </div>
          <p className="mt-6 font-normal text-center text-white md:mt-0">
            {t("authenticationPage.registerContent")}
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>{t("authenticationPage.alreadyHaveAccount")}</span>
            <Link to="/login" className="underline text-gray-700">
              {t("authenticationPage.loginNow")}
            </Link>
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            {t("authenticationPage.readOur")}{" "}
            <Link to="/" className="underline text-gray-700">
              {t("authenticationPage.readOur")}
            </Link>{" "}
            {t("authenticationPage.terms")}{" "}
            <Link to="/" className="underline text-gray-700">
              {t("authenticationPage.conditions")}
            </Link>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            {t("authenticationPage.accountRegister")}
          </h3>
          <form
            className="flex flex-col space-y-5"
            onSubmit={(event) => handleSubmit(event)}
          >
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="username"
                className="text-sm font-semibold text-gray-500 text-left"
              >
                {t("authenticationPage.userName")}
              </label>
              <input
                type="text"
                id="username"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-500 text-left"
              >
                {t("authenticationPage.emailAddress")}
              </label>
              <input
                type="email"
                id="email"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  {t("authenticationPage.password")}
                </label>
              </div>
              <input
                type="password"
                id="password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="re-password"
                  className="text-sm font-semibold text-gray-500"
                >
                  {t("authenticationPage.rePassword")}
                </label>
              </div>
              <input
                type="password"
                id="re-password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={(e) => setRepassword(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="term"
                className="z-40 w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                onClick={() => setTerm(!term)}
              />
              <label
                htmlFor="remember"
                className="text-sm font-semibold text-gray-500"
              >
                {t("authenticationPage.acceptOurTerm")}
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                {t("common.signUp")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
