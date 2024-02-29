import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../../../components/common/header/header'
import Footer from '../../../components/common/footer/footer'
const Auction = () => {
  return (
    <Container fluid>
      <Header></Header>
      <Row style={{ border: "1px solid black", width: "90%", margin: "auto" }}>
        <Col xs={2}>
            div
        </Col>
        <Col xs={8}>
          <h1>YE - P909 trash color</h1>
          <img
            style={{ height: "300px", margin: "auto" }}
            src="https://sneakerdaily.vn/wp-content/uploads/2021/03/Giay-adidas-Yeezy-Foam-Runner-MXT-Moon-Grey-GV7904.png.webp"
            alt=""
          />
          <h2>Time Left</h2>

          <h2>Current price: </h2>
          <small>Mr/Mrs is paid highest price now</small>
          <h2>Your Price:</h2>
          <button>Bid</button>
        </Col>
        <Col xs={2}></Col>
        <input type="text" className='border-2'  placeholder='Hello'/>
      </Row>
      <Footer></Footer>
    </Container>
  );
}

export default Auction