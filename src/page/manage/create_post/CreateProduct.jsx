import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { toast } from "react-toastify";
import useObservable from "../../../core/hooks/useObservable.hooks";
import { getCategory } from "../../../services/public/category.service";
import { createProduct } from "../../../services/public/product.service";

const CreateProduct = () => {
  const [cate, setCate] = useState("");
  const [productName, setProductName] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAdress] = useState("");
  const [timeStart, setTimeStart] = useState(0);
  const [timeEnd, setTimeEnd] = useState(0);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [listCate, setListCate] = useState([]);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const { subscribeOnce } = useObservable();

  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = () => {
    subscribeOnce(getCategory(), (res) => {
      if (!res) return;
      setListCate(res.data);
    });
  };

  const handleInputImage = (event) => {
    const file = event.target.files;

    for (const element of file) {
      const reader = new FileReader();
      reader.readAsDataURL(element);
      reader.onload = () => {
        setImages([...images, { url: reader.result }]);
      };
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!cate) {
      toast("Please select category");
      return;
    }
    if (!timeStart) {
      toast("Please select auction day start");
      return;
    }
    if (!timeEnd) {
      toast("Please select auction day end");
      return;
    }
    const now = new Date();
    now.setDate(now.getDate() + 1);
    if (
      Math.floor(new Date(timeStart).getTime() / 1000) <
      now.getTime() / 1000
    ) {
      toast(
        "The auction start time must be greater than now at least one day!"
      );
      return;
    }
    if (
      Math.floor(new Date(timeStart).getTime() / 1000) >
      Math.floor(new Date(timeEnd).getTime() / 1000)
    ) {
      toast("The auction start time must be smaller than the end time!");
      return;
    }

    const product = {
      productName,
      title,
      subTitle,
      timeEnd: Math.floor(new Date(timeEnd).getTime() / 1000),
      timeStart: Math.floor(new Date(timeStart).getTime() / 1000),
      phone: phone.toString(),
      address,
      price,
      description,
      images: [...images],
      ...(cate && { category: cate }),
    };
    subscribeOnce(createProduct(product), (res) => {
      toast.success("Create post sucess!");
      navigate("/");
    });
  };

  const setCaption = (value, index) => {
    images[index].caption = value;
  };

  const removeImage = (index) => {
    console.log("remove");
    images.splice(index, 1);
    console.log(images);
    // Assign the result back to the images variable
    setImages([...images]);
  };

  return (
    <div>
      <Container className="vh-100 d-flex align-items-center justify-content-center">
        <Row>
          <Col>
            <Card style={{ width: "400px" }}>
              <Card.Body>
                <Form
                  onSubmit={(event) => {
                    handleSubmit(event);
                  }}
                >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Enter title"
                      autoFocus
                      onChange={(event) => setTitle(event.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Enter sub-title"
                      onChange={(event) => setSubTitle(event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="number"
                      placeholder="Enter phone"
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Enter address"
                      onChange={(event) => setAdress(event.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Enter product name"
                      onChange={(event) => setProductName(event.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicprice">
                    <Form.Control
                      type="number"
                      placeholder="Enter price"
                      onChange={(event) => setPrice(event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicdescription">
                    <Form.Control
                      type="text"
                      placeholder="Enter description"
                      onChange={(event) => setDescription(event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Select
                      onChange={(event) => setCate(event.target.value)}
                    >
                      <option disabled selected>
                        No categories selected
                      </option>
                      {Array.isArray(listCate) && listCate.length > 0 ? (
                        listCate.map((cate, index) => (
                          <option key={index} value={cate._id}>
                            {cate.name}
                          </option>
                        ))
                      ) : (
                        <option>No categories available</option>
                      )}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="datetime-local"
                      placeholder="Enter auction day start"
                      onChange={(event) => setTimeStart(event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="datetime-local"
                      placeholder="Enter auction day end"
                      onChange={(event) => setTimeEnd(event.target.value)}
                    />
                  </Form.Group>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleInputImage(e)}
                  />
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "400px" }}>
              <Card.Body>
                <Carousel data-bs-theme="dark">
                  {images.map((slide, index) => (
                    <Carousel.Item
                      key={index}
                      interval={10000}
                      style={{ width: "400px !important", height: "500px" }}
                      className="relative"
                    >
                      {slide.url && (
                        <img
                          className="d-block w-100 rounded-sm w-[400px]"
                          src={slide.url}
                          alt={`Slide ${index + 1}`}
                        />
                      )}
                      <Button
                        className="absolute top-0 right-0 text-red-500 text-2xl z-50"
                        onClick={() => removeImage(index)}
                        style={{ cursor: "pointer" }}
                      >
                        X
                      </Button>
                      <Carousel.Caption>
                        <input
                          className="border bg-white"
                          type="text"
                          placeholder="Enter caption"
                          onChange={(event) =>
                            setCaption(event.target.value, index)
                          }
                        />
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateProduct;
