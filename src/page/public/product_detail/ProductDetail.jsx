import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CarouselComponent from "../../../components/common/carousel/carousel";
import Button from "../../../components/common/button/button.component";
import { Star } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const carousel = [
    {
      img: "https://pubcdn.ivymoda.com/files/news/2023/08/06/bf8a7d8755e486feebecda9c6913f7eb.png",
    },
    {
      img: "https://pubcdn.ivymoda.com/files/news/2023/08/06/bf8a7d8755e486feebecda9c6913f7eb.png",
    },
  ];
  return (
    <div className="mx-80">
      <Card>
        <Card.Body>
          <div className="flex">
            <div className="w-[60%]">
              <div className="flex flex-col">
                <CarouselComponent
                  classSub={"h-[100%]"}
                  content={carousel}
                  theme="dark"
                  isBorder={true}
                />
              </div>
            </div>
            <div className="w-[35%] mx-3 text-left">
              <div>
                <span className="text-pretty text-2xl">HJello</span>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetail;
