import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CarouselComponent from "../../../components/common/carousel/carousel";
import { Star } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useObservable from "../../../core/hooks/useObservable.hooks";
import { getProductById } from "../../../services/public/product.service";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import CountdownTimer from "../../../components/common/countdownTimer/CountdownTimer";
import { getUserById } from "../../../services/authentication/authentication.services";
import {
  create,
  getByProductId,
} from "../../../services/public/auctionHistory.service";
import socket from "../../../lib/socket.lib";

const Auction = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [bid, setBid] = useState(0);
  const [userId, setUserId] = useState("");
  const { subscribeOnce } = useObservable();
  const [highest, setHighest] = useState(0);
  const [highestUser, setHighestUser] = useState(0);
  const navigate = useNavigate();
  let userLocal = localStorage.getItem("user");
  const getUser = (userLocal) => {
    subscribeOnce(getUserById(userLocal), (res) => {
      if (!res) return;
      setUserId(res._id);
    });
  };
  useEffect(() => {
    socket.on("newHihestBid", (data) => {
      getHighestPrice();
    });
  }, [socket]);

  useEffect(() => {
    getProduct();
    if (userLocal) {
      try {
        userLocal = JSON.parse(userLocal);
        getUser(userLocal);
      } catch (error) {
        console.error("Error parsing user:", error);
      }
    }
    getHighestPrice();
  }, []);
  useEffect(() => {
    if (product.images && product.images.length > 0) {
      console.log(product.images);
      let imgs = [];
      product.images.forEach((img) => {
        imgs.push({ img: img.url });
      });
      console.log(imgs);
      setImagesForCarousel(imgs);
    }
  }, [product]);

  const getProduct = () => {
    if (!id) {
      navigate("/");
      return;
    }
    subscribeOnce(getProductById(id), (res) => {
      if (!res) return;
      setProduct(res);
      setImagesForCarousel(res);
    });
  };
  const setImagesForCarousel = (pro) => {
    if (pro.images && pro.images.length > 0) {
      let imgs = [];
      pro.images.forEach((img) => {
        imgs.push({ img: img.url });
      });
      setImages(imgs);
    }
  };
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

  const getHighestPrice = () => {
    subscribeOnce(getByProductId({ id }), (res) => {
      if (!res || res.length < 1 || !res[0]) return;
      console.log(res[0]);
      if (res[0].price) setHighest(res[0].price);
      if (res[0].userId) setHighestUser(res[0].userId);
    });
  };

  const formatPrice = (price) => {
    if (!price) return;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleBid = () => {
    if (product?.maxPrice > 0 && parseFloat(bid) >= product?.maxPrice) {
      let text =
        "Bid larger max price, do you want buy outright?\nEither OK or Cancel.";
      if (window.confirm(text)) {
        console.log("g");
      }
      return;
    }
    if (parseFloat(bid) < highest + 10000) {
      toast("Please enter bid larger highest bid price at least 10.000 (VND)!");
      return;
    }
    const data = {
      productId: id,
      userId,
      price: parseFloat(bid),
    };
    subscribeOnce(create(data), (res) => {
      if (!res) return;
      toast("Bid success");
      setBid(0);
      socket.emit("newBid", { hello: "dcm" });
    });
  };
  return (
    <div className="mx-80">
      <Card>
        <Card.Body>
          <div className="flex">
            <div className="w-[60%]">
              <div className="flex flex-col">
                <CarouselComponent
                  classSub={"h-[100%]"}
                  content={images}
                  theme="dark"
                  isBorder={true}
                />
              </div>
            </div>
            <div className="w-[35%] mx-3 text-left">
              <div className="relative">
                <div>
                  <div>
                    <span className="text-pretty text-2xl font-bold">
                      {product?.title}
                    </span>
                  </div>
                  <div>
                    <span className="text-pretty text-base font-semibold">
                      {product?.productName}
                    </span>
                  </div>
                  <div>
                    <span className="text-pretty text-base font-medium">
                      <Row className="mx-1">
                        Price Start: {formatPrice(product?.price)}&nbsp; (VND)
                      </Row>
                      {product?.maxPrice !== 0 ? (
                        <>
                          <Row className="mx-1">
                            Max Price: {formatPrice(product?.maxPrice)}&nbsp;
                            (VND)
                          </Row>
                          <Row>
                            <Button variant="warning">Buy outright</Button>
                          </Row>
                        </>
                      ) : (
                        <>
                          <span>Not limited (VND)</span>
                        </>
                      )}
                    </span>
                  </div>
                  <div>Time end: {formatTimestamp(product?.timeEnd)} </div>
                  <div>
                    <CountdownTimer timeEnd={product?.timeEnd} />{" "}
                  </div>
                  <div>
                    Current highest price: {formatPrice(highest)}&nbsp; (VND)
                    &nbsp; - By: {highestUser?.username}
                  </div>
                  <Row
                    className="align-item-center"
                    style={{ alignItems: "center" }}
                  >
                    <Col xs={8}>
                      <input
                        type="number"
                        className="border px-1"
                        placeholder="Enter price to bid"
                        value={bid}
                        onChange={(event) => setBid(event.target.value)}
                      />
                    </Col>
                    <Col xs={4}>
                      <Button
                        onClick={(event) => {
                          handleBid();
                        }}
                      >
                        Bid
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Auction;
