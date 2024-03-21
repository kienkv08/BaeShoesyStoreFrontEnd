import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import useObservable from "../../../core/hooks/useObservable.hooks";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/authentication/authentication.services";

const Login = () => {
  const { t } = useTranslation();
  const { subscribeOnce } = useObservable();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    if (!username) {
      toast("Username is require!");
    }
    if (!password) {
      toast("Password is require!");
    }
    const data = {
      username: username,
      password: password,
    };
    subscribeOnce(login(data), (res) => {
      if (!res) return;
      console.log(res);
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("user", JSON.stringify(res.user));
      toast("Login successfully!");
      window.location.href = "/";
      // navigate("/");
    });
  };

  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center min-w-[100vw]">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center w-full">
            <Link to="/" className="text-gray-700">
              {t("common.pageName")}
            </Link>
          </div>
          <p className="mt-6 font-normal text-center text-white md:mt-0">
            {t("authenticationPage.welcomeContent")}
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>{t("authenticationPage.dontHaveAccount")}</span>
            <Link to="/register" className="underline text-gray-700">
              {t("authenticationPage.getStarted")}
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
            {t("authenticationPage.accountLogin")}
          </h3>
          <form
            className="flex flex-col space-y-5"
            onSubmit={(event) => handleLogin(event)}
          >
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-500 text-left"
              >
                {t("authenticationPage.userName")}
              </label>
              <input
                type="text"
                id="email"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={(event) => setUsername(event.target.value)}
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
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-600 hover:underline focus:text-blue-800"
                >
                  {t("authenticationPage.forgotPassword")}
                </Link>
              </div>
              <input
                type="password"
                id="password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="z-40 w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label
                htmlFor="remember"
                className="text-sm font-semibold text-gray-500"
              >
                {t("common.rememberMe")}
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                {t("common.signIn")}
              </button>
            </div>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-500">
                  {t("authenticationPage.loginWith")}
                </span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>
              <div className="flex flex-col space-y-4">
                {/* href={`${Config.REACT_APP_API_URL_BACKEND}/auth/google/redirect`} */}
                <a
                  href="dd"
                  className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-slate-100 focus:outline-none"
                >
                  {/* <span>
                    <icons.google className="h-6 w-6" />
                    Google Icon
                  </span> */}
                  <span className="text-sm font-medium text-blue-500">
                    {t("common.google")}
                  </span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
