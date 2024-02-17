import React from "react";
import Footer from "../../common/footer/footer";
import Header from "../../common/header/header";

const DefaultLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
