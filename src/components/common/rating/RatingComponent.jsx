import React, { useState } from "react";
import { MDBContainer, MDBRating } from "mdb-react-ui-kit";

const RatingComponent = () => {
  const [basic] = useState([
    {
      tooltip: "Very Bad",
    },
    {
      tooltip: "Poor",
    },
    {
      tooltip: "Ok",
      choosed: true,
    },
    {
      tooltip: "Good",
    },
    {
      tooltip: "Excellent",
    },
  ]);

  return (
    <MDBContainer>
      <MDBRating data={basic} />
    </MDBContainer>
  );
};

export default RatingComponent;
