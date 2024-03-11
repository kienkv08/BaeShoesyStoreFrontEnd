import React from "react";
import Card from "react-bootstrap/Card";
import "./CardProduct.css";
import { Link, useNavigate } from "react-router-dom";

const CardProduct = ({
  customClass = "w-full 2xl:w-[24%] px-3 mb-3 mr-3 hover-card",
  product = {},
}) => {
  const navigate = useNavigate();
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return;
    timestamp = timestamp * 1000;
    const date = new Date(timestamp);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return date.toLocaleString("en-US", options);
  };
  return (
    <Card
      className={customClass}
      onClick={() => navigate("/product-detail/" + product?._id)}
    >
      <Card.Img
        className="hover-scale"
        style={{
          width: "100%",
          height: "30vh",
          objectFit: "cover",
        }}
        variant="top"
        src={
          product.images && product.images.length > 0
            ? product.images[0].url
            : ""
        }
      />
      <Card.Body className="hover-scale text-base">
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>{product?.subTitle}</Card.Text>
        <Card.Text>Price: {product?.price}&nbsp; VND</Card.Text>
        <Card.Text>Address: {product?.address}</Card.Text>
        <Card.Text>Time start: {formatTimestamp(product?.timeStart)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
