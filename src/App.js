import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { adminRoutes, publicRoutes } from "./routes";
import axios from "axios";
import DefaultLayout from "./components/layout/default/default.layout";
import Page404 from "./page/error/page404";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Config } from "./configuration/env.config";

const App = () => {
  axios.defaults.baseURL = Config.REACT_APP_API_URL_BACKEND;
  let user = localStorage.getItem("user") || null;
  if (user) {
    user = JSON.parse(user);
  }
  const isAuthentic = (isAuth) => user && isAuth;
  const isAdmin = () => {
    if (user) {
      return user.role === 1;
    }
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                path={route.path}
                element={
                  isAuthentic(route.isAuth) ? (
                    <Navigate to="/" replace />
                  ) : (
                    <Layout>
                      <Page />
                    </Layout>
                  )
                }
                key={index}
              />
            );
          })}
          {isAdmin() &&
            adminRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if ((route.layout = null)) {
                Layout = Fragment;
              }
              return (
                <Route
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                  key={index}
                />
              );
            })}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
