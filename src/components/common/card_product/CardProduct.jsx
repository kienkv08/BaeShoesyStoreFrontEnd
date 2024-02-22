import React from "react";
import Card from "react-bootstrap/Card";
import "./CardProduct.css";

const CardProduct = ({
  customClass = "w-full 2xl:w-[24%] px-3 mb-3 mr-3 hover-card",
}) => {
  return (
    <Card className={customClass}>
      <Card.Img
        className="hover-scale"
        variant="top"
        src="https://assets.adidas.com/images/w_600,f_auto,q_auto/bce4c93377ad4aea9fa3b30f822bf235_9366/Ultrabounce_Shoes_Blue_ID2247_01_standard.jpg"
      />
      <Card.Body className="hover-scale">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. 100$
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
