import React, { useEffect, useState } from "react";
import CarouselComponent from "../../../components/common/carousel/carousel";
import Card from "react-bootstrap/Card";
import CardProduct from "../../../components/common/card_product/CardProduct";
import CardCategory from "../../../components/common/card_categories/CardCategory";
import "./PostPage.css";
import useObservable from "../../../core/hooks/useObservable.hooks";
import { getProducts } from "../../../services/public/product.service";

const PostPage = () => {
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
            <CarouselComponent classSub={"h-[25vh]"} />
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
            <div className="w-full px-3 mb-6 text-xl">Posts</div>
            {products.map((p, index) => (
              <CardProduct product={p} key={index} />
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostPage;
