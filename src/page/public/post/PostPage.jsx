import React, { useEffect, useState } from "react";
import CarouselComponent from "../../../components/common/carousel/carousel";
import Card from "react-bootstrap/Card";
import CardProduct from "../../../components/common/card_product/CardProduct";
import CardCategory from "../../../components/common/card_categories/CardCategory";
import "./PostPage.css";
import useObservable from "../../../core/hooks/useObservable.hooks";
import { getProducts } from "../../../services/public/product.service";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";
import Col from "react-bootstrap/Col";
import { getCategory } from "../../../services/public/category.service";

const PostPage = () => {
  const [products, setProducts] = useState([]);
  const { subscribeOnce } = useObservable();
  const [totalPage, setTotalPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [listCate, setListCate] = useState([]);
  const [cate, setCate] = useState("");
  const [actives, setActives] = useState([]);
  const [carouselList, setCarouselList] = useState([]);
  useEffect(() => {
    getAllCategory();
    getAllProductWithoutDelete();
    getPostActive();
  }, []);

  let carousel = [];
  const getPostActive = () => {
    const param = {
      pagination: {
        size: 8,
        page: 1,
        status: 1,
        now: Math.floor(new Date().getTime() / 1000),
      },
      populates: ["category"],
    };
    subscribeOnce(getProducts(param), (res) => {
      if (!res) return;
      if (res.data) setActives(res.data);
      carousel = [];
      res.data.forEach((p) => {
        carousel.push({
          img: p.images[0] ? p.images[0].url : "",
          title: p.title,
          link: p._id,
        });
      });
      setCarouselList(carousel);
    });
  };

  const getAllCategory = () => {
    subscribeOnce(getCategory(), (res) => {
      if (!res) return;
      setListCate(res.data);
    });
  };

  const getAllProductWithoutDelete = (
    p = currentPage,
    s = search,
    cat = cate,
    now = ""
  ) => {
    const params = {
      pagination: {
        size: 10,
        page: p,
        status: 1,
        ...(s && { text: search }),
        ...(cat && { category: cat }),
        ...(now && { now: Math.floor(new Date().getTime() / 1000) }),
      },
      populates: ["category", "created_by"],
      searchBy: ["productName"],
    };
    subscribeOnce(getProducts(params), (res) => {
      if (!res) return;
      if (res.data) setProducts(res.data);
      setCurrentPage(res.currentPage);
      setTotal(res.total);
      setTotalPage(Math.ceil(res.total / 10));
    });
  };
  const searchProductWithDebounce = (value) => {
    setSearch(value);
    searchProduct(value);
  };

  const searchProduct = (value) => {
    getAllProductWithoutDelete(1, value);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
    getAllProductWithoutDelete(page, search);
  };
  const filterProduct = (value) => {
    if (value) setCate(value);
    setSearch("");
    getAllProductWithoutDelete(1, "", value);
  };
  const handleFilterAuc = (value) => {
    console.log("va", value);
    getAllProductWithoutDelete(1, "", cate, value);
  };
  return (
    <div className="mx-80">
      <Card>
        <Card.Body>
          {" "}
          <div className="flex flex-col">
            <CarouselComponent classSub={"h-[35vh]"} content={carouselList} />
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
      <Card>
        <Card.Body>
          <Row className="align-items-center">
            <Col xs={8}>
              <input
                type="text"
                className="border p-2 w-100"
                placeholder="Search product"
                onChange={(event) =>
                  searchProductWithDebounce(event.target.value)
                }
              />
            </Col>
            <Col>
              <select
                onChange={(event) => filterProduct(event.target.value)}
                className="border"
              >
                <option value="">All</option>
                {Array.isArray(listCate) && listCate.length > 0 ? (
                  listCate.map((cate, index) => (
                    <option key={index} value={cate._id}>
                      {cate.name}
                    </option>
                  ))
                ) : (
                  <option>No categories available</option>
                )}
              </select>
            </Col>
            <Col>
              <select
                onChange={(event) => handleFilterAuc(event.target.value)}
                className="border"
              >
                <option value="">All</option>
                <option value="now">Active</option>
              </select>
            </Col>
          </Row>
        </Card.Body>
      </Card>
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
      <Row className="justify-content-center">
        <Col>
          <Pagination className="justify-content-center">
            <Pagination.First
              onClick={() => handlePageChange(1)}
              disabled={totalPage === 1 ? true : false}
            />
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={totalPage === 1 ? true : false}
            />

            {Array.from({ length: totalPage }).map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}

            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={totalPage === 1 ? true : false}
            />
            <Pagination.Last
              onClick={() => handlePageChange(totalPage)}
              disabled={totalPage === 1 ? true : false}
            />
          </Pagination>
        </Col>
      </Row>
    </div>
  );
};

export default PostPage;
