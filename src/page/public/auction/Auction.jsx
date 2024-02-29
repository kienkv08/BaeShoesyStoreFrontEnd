import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../../../components/common/header/header'
import Footer from '../../../components/common/footer/footer'
import "./Auction.css";
const Auction = () => {
  return (
    <Container fluid>
      <Header></Header>
      <Row style={{ border: "1px solid black", width: "90%", margin: "auto" }}>
        <Col xs={2}>USER X 4</Col>
        <Col xs={8}>
          <h1>YE - P909 Premium</h1>
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
        <Col xs={2}>USER X 4</Col>
        <input type="number" className="border-2" placeholder="Enter bid" />
      </Row>
      <div class="phone_body">
        <div class="chat">
          <img
            class="chat_avatar"
            src="https://randomuser.me/api/portraits/men/32.jpg"
          />
          <div class="chat_info">
            <div class="contact_name">Patric Venturini </div>
            <div class="contact_msg">
              Are you planning to play anything tonight?{" "}
            </div>
          </div>
          <div class="chat_status">
            <div class="chat_date">9:20 PM</div>
            <div class="chat_new grad_pb"> New </div>
          </div>
        </div>

        <div class="chat">
          <img
            class="chat_avatar"
            src="https://randomuser.me/api/portraits/men/11.jpg"
          />
          <div class="chat_info">
            <div class="contact_name">Adriano Canofre </div>
            <div class="contact_msg">
              Dude can you help me with my motorcycle?
            </div>
          </div>
          <div class="chat_status">
            <div class="chat_date">8:12 PM</div>
            <div class="chat_new grad_pb"> New </div>
          </div>
        </div>

        <div class="chat">
          <img
            class="chat_avatar"
            src="https://randomuser.me/api/portraits/men/32.jpg"
          />
          <div class="chat_info">
            <div class="contact_name">Patric Venturini </div>
            <div class="contact_msg">
              Are you planning to play anything tonight?{" "}
            </div>
          </div>
          <div class="chat_status">
            <div class="chat_date">Yesterday</div>
            <div class="chat_new grad_pb"> New </div>
          </div>
        </div>
        <div class="chat">
          <img
            class="chat_avatar"
            src="https://randomuser.me/api/portraits/men/11.jpg"
          />
          <div class="chat_info">
            <div class="contact_name">Adriano Canofre </div>
            <div class="contact_msg">
              Dude can you help me with my motorcycle?
            </div>
          </div>
          <div class="chat_status">
            <div class="chat_date">Yesterday</div>
          </div>
        </div>

        <div class="chat">
          <img
            class="chat_avatar"
            src="https://randomuser.me/api/portraits/men/32.jpg"
          />
          <div class="chat_info">
            <div class="contact_name">Patric Venturini </div>
            <div class="contact_msg">
              Are you planning to play anything tonight?{" "}
            </div>
          </div>
          <div class="chat_status">
            <div class="chat_date">Yesterday</div>
          </div>
        </div>
        <div class="chat">
          <img
            class="chat_avatar"
            src="https://randomuser.me/api/portraits/men/11.jpg"
          />
          <div class="chat_info">
            <div class="contact_name">Patric Venturini </div>
            <div class="contact_msg">
              Are you planning to play anything tonight?{" "}
            </div>
          </div>
          <div class="chat_status">
            <div class="chat_date">Yesterday</div>
          </div>
        </div>

        <div class="chat">
          <img
            class="chat_avatar"
            src="https://randomuser.me/api/portraits/men/32.jpg"
          />
          <div class="chat_info">
            <div class="contact_name">Patric Venturini </div>
            <div class="contact_msg">
              Are you planning to play anything tonight?{" "}
            </div>
          </div>
          <div class="chat_status">
            <div class="chat_date">Yesterday</div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Container>
  );
}

export default Auction