import React from "react";
import Card from "react-bootstrap/Card";
import CarouselComponent from "../../../components/common/carousel/carousel";
import Button from "../../../components/common/button/button.component";
import { Star } from "@material-ui/icons";

const ProductDetail = () => {
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
            <div className="w-[35%] mx-3">
              <div className="relative">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                  className="rounded-full h-15 w-15"
                />
                <span>Kien kieu hehe</span>
                <Button>See Info</Button>
                <span>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </span>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetail;
