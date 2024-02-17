import React from "react";
import { MDBSpinner } from "mdb-react-ui-kit";
import "./page.loading.css";

export const PageLoading = () => {
  return (
    <div className="fp-container">
      <MDBSpinner className="fp-loader h-12 w-12" />
    </div>
  );
};
