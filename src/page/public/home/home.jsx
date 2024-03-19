import React, { useEffect, useState } from "react";
import CarouselComponent from "../../../components/common/carousel/carousel";
import Card from "react-bootstrap/Card";
import CardProduct from "../../../components/common/card_product/CardProduct";
import CardCategory from "../../../components/common/card_categories/CardCategory";
import useObservable from "../../../core/hooks/useObservable.hooks";
import { getProducts } from "../../../services/public/product.service";

const Home = () => {
  const carousel = [
    {
      img: "https://pubcdn.ivymoda.com/files/news/2023/08/06/bf8a7d8755e486feebecda9c6913f7eb.png",
      title: "Hello",
      subTitle: "Hello 2",
    },
    {
      img: "https://pubcdn.ivymoda.com/files/news/2023/08/06/bf8a7d8755e486feebecda9c6913f7eb.png",
      title: "Hello 2",
      subTitle: "Hello 3",
    },
  ];
  const [products, setProducts] = useState([]);
  const { subscribeOnce } = useObservable();
  useEffect(() => {
    getAllProductWithoutDelete();
  }, []);

  const getAllProductWithoutDelete = () => {
    const params = {
      pagination: {
        size: 10,
        page: 1,
      },
      populates: ["category"],
    };
    subscribeOnce(getProducts(params), (res) => {
      if (!res) return;
      if (res.data) setProducts(res.data);
    });
  };
  return (
    <div className="mx-80">
      <Card>
        <Card.Body>
          {" "}
          <div className="flex flex-col">
            <CarouselComponent classSub={"h-[25vh]"} content={carousel} />
          </div>
        </Card.Body>
      </Card>
      {/* <Card className="mt-2">
        <Card.Body>
          {" "}
          <div className="flex flex-wrap -mx-3 justify-center">
            <div className="w-full px-3 mb-3 text-xl">Discovery categories</div>
            <CardCategory
              image={
                "https://cafefcdn.com/thumb_w/640/203337114487263232/2022/12/7/photo1670409187245-16704091874871004255991.jpg"
              }
              name={"Nike"}
            />
            <CardCategory
              image={
                "https://cafefcdn.com/thumb_w/640/203337114487263232/2022/12/7/photo1670409187245-16704091874871004255991.jpg"
              }
              name={"Nike"}
            />
            <CardCategory
              image={
                "https://cafefcdn.com/thumb_w/640/203337114487263232/2022/12/7/photo1670409187245-16704091874871004255991.jpg"
              }
              name={"Nike"}
            />
            <CardCategory
              image={
                "https://cafefcdn.com/thumb_w/640/203337114487263232/2022/12/7/photo1670409187245-16704091874871004255991.jpg"
              }
              name={"Nike"}
            />
            <CardCategory
              image={
                "https://cafefcdn.com/thumb_w/640/203337114487263232/2022/12/7/photo1670409187245-16704091874871004255991.jpg"
              }
              name={"Nike"}
            />
            <CardCategory
              image={
                "https://cafefcdn.com/thumb_w/640/203337114487263232/2022/12/7/photo1670409187245-16704091874871004255991.jpg"
              }
              name={"Nike"}
            />
          </div>
        </Card.Body>
      </Card> */}
      <Card className="mt-2 mb-2">
        <Card.Body>
          {" "}
          <div className="flex flex-wrap -mx-3 justify-center">
            <div className="w-full px-3 mb-6 text-xl">New Posts</div>
            {products.map((p, index) => (
              <CardProduct product={p} key={index} />
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
