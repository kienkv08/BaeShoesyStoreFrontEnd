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

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const { subscribeOnce } = useObservable();
  const navigate = useNavigate();

  useEffect(() => {
    getProduct();
  }, []);
  // useEffect(() => {
  //   if (product.images && product.images.length > 0) {
  //     let imgs = [];
  //     product.images.forEeach((img) => {
  //       imgs.push({ img: img.url });
  //     });
  //     console.log(imgs);
  //     setImagesForCarousel(imgs);
  //   }
  // }, [product]);

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

  const formatPrice = (price) => {
    if (!price) return;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const accessToAutionPage = (id) => {
    if (!id) return;
    const now = new Date();
    if (!product.timeStart) return;
    if (
      Math.floor(new Date(product.timeStart).getTime() / 1000) >
      now.getTime() / 1000
    ) {
      toast.warn("It's not time yet!");
      return;
    }
    navigate("/auction/" + id);
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
                    <span className="text-pretty text-base text-green-500">
                      {product?.subTitle}
                    </span>
                  </div>
                  <div>
                    <span className="text-pretty text-base font-semibold">
                      {product?.productName}
                    </span>
                  </div>
                  <div>
                    <span className="text-pretty text-base font-medium">
                      {formatPrice(product?.price)}&nbsp;-&nbsp;
                      {product?.maxPrice !== 0 ? (
                        <span>
                          {formatPrice(product?.maxPrice)}&nbsp; (VND)
                        </span>
                      ) : (
                        <>
                          <span>Not limited (VND)</span>
                        </>
                      )}
                    </span>
                  </div>
                  <div>
                    Time start: {formatTimestamp(product?.timeStart)}{" "}
                    <Button
                      variant="success"
                      onClick={() => accessToAutionPage(product?._id)}
                    >
                      Participate in the auction
                    </Button>{" "}
                  </div>
                  <div>Description: {product?.description}</div>

                  <div className="relative">
                    <img
                      src={product?.created_by?.avatar}
                      className="rounded-full h-15 w-15 items-end"
                      alt="avatar"
                    />
                    <span className="absolute left-[70px] top-0">
                      {product?.created_by?.username}
                    </span>
                    <Button
                      variant="primary"
                      className="absolute left-[70px] top-7"
                    >
                      See Info
                    </Button>
                    <span className="absolute left-[60%] top-0">
                      Address: {product?.address}
                      <br />
                      Phone: {product?.phone}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetail;
