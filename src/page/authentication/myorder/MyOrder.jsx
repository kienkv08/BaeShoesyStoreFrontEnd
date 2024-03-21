import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import Col from "react-bootstrap/Col";
import useObservable from "../../../core/hooks/useObservable.hooks";
import {
  getProducts,
  updateProduct,
} from "../../../services/public/product.service";
import { toast } from "react-toastify";
import {
  getOrder,
  updateOrder,
} from "../../../services/transaction/order.service";

const MyOrder = () => {
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [status, setStatus] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(10);
  const [search, setSearch] = useState("");
  const { subscribeOnce } = useObservable();
  const navigate = useNavigate();
  let user = localStorage.getItem("user") || null;
  if (user) {
    user = JSON.parse(user);
  }

  const getAllProduct = async (p = currentPage, s = search, sta = status) => {
    const params = {
      pagination: {
        size: 5,
        page: p,
        ...(user && { userId: user._id }),
        ...(sta !== -1 && { status: sta }),
      },
      populates: ["userId", "productId"],
    };
    subscribeOnce(getOrder(params), (res) => {
      if (!res) return;
      if (res.data) setProducts(res.data);
      setCurrentPage(res.currentPage);
      setTotal(res.total);
      setTotalPage(Math.ceil(res.total / 5));
    });
    // try {
    //     const result = await getAllProductService({
    //       p: p,
    //       n: 10,
    //       search: s,
    //     });
    //     setCurrentPage(result.currentPage);
    //     setTotalPage(result.totalPages);
    //     setTotalResults(result.totalResults);
    //     setProductList(result.data);
    // } catch (error) {
    //   console.error("Error fetching product list:", error);
    // }
  };

  useEffect(() => {
    getAllProduct();
  }, []);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    getAllProduct(page, search);
  };

  const searchProductWithDebounce = (value) => {
    setSearch(value);
    searchProduct(value);
  };

  const searchProduct = (value) => {
    getAllProduct(1, value);
  };

  const filterProduct = (value) => {
    setStatus(parseInt(value));
    setSearch("");
    setCurrentPage(1);
    getAllProduct(1, "", parseInt(value));
  };

  const reviewProduct = (id, value) => {
    subscribeOnce(updateOrder(id, { status: value }), (res) => {
      if (!res) return;
      toast("Success");
      getAllProduct();
    });
  };

  return (
    <Container fluid>
      <Row>
        <h1>My orders</h1>
      </Row>
      <Row className="align-items-center">
        <Col xs={8}>
          <input
            type="text"
            className="border p-2 w-100"
            placeholder="Search order"
            onChange={(event) => searchProductWithDebounce(event.target.value)}
          />
        </Col>
        <Col>
          <select onChange={(event) => filterProduct(event.target.value)}>
            <option value="-1">All</option>
            <option value="1">Processing</option>
            <option value="2">Received</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Table striped bordered hover className="min-h-[70vh]">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Order Date</th>
              <th>Order By</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                onDoubleClick={() =>
                  navigate("/product-detail/" + product.productId?._id)
                }
              >
                <td>{index + 1}</td>
                <td>
                  <img
                    src={
                      product.productId.images[0]
                        ? product.productId.images[0].url
                        : ""
                    }
                    alt={`Product ${index + 1}`}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                    className="rounded-circle"
                  />
                </td>
                <td>{product.productId.title}</td>
                <td>{product.productId.productName}</td>
                <td>{product.productId.price} (VND)</td>
                <td>{product.createdAt}</td>
                <td>{product?.userId?.username}</td>
                <td>{product.status == 1 ? "Processing" : "Received"}</td>
                <td>
                  <Button
                    variant="warning"
                    className="mr-1"
                    disabled={product.status == 2}
                    onClick={() => reviewProduct(product._id, 2)}
                  >
                    Confirm Received
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
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
      </Row>
    </Container>
  );
};

export default MyOrder;
