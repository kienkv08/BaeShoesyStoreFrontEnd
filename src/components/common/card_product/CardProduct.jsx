import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CardProduct.css";
import { Link, useNavigate } from "react-router-dom";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";

const CardProduct = ({
  customClass = "w-full 2xl:w-[24%] px-3 mb-3 mr-3 hover-card relative",
  product = {},
}) => {
  const navigate = useNavigate();
  const [conhan, setConhan] = useState(false);
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
  const formatPrice = (price) => {
    if (!price) return;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const auctionOrNot = () => {
    const now = new Date();
    if (!product.timeStart) return;
    if (
      Math.floor(new Date(product.timeStart).getTime()) <
      Math.floor(now.getTime())
    ) {
      setConhan(false);
      return;
    }
    setConhan(true);
  };
  useEffect(() => {
    auctionOrNot();
  }, []);
  return (
    <Card
      className={customClass}
      onClick={() => navigate("/product-detail/" + product?._id)}
    >
      <span className="absolute top-0 right-0">
        {conhan ? (
          <Button variant="warning">Active</Button>
        ) : (
          <Button>Unactive</Button>
        )}
      </span>
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
      <Card.Body className="hover-scale text-base relative">
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
          Name: {product?.productName}
          <br />
          Category: {product?.category?.name}
          <br />
          <span className="text-pretty text-base font-medium">
            {formatPrice(product?.price)}&nbsp;-&nbsp;
            {product?.maxPrice !== 0 ? (
              <span>{formatPrice(product?.maxPrice)}&nbsp; (VND)</span>
            ) : (
              <>
                <span>Not limited (VND)</span>
              </>
            )}
          </span>
          <br />
          Address: {product?.address}
          <br />
          Time start: {formatTimestamp(product?.timeStart)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
