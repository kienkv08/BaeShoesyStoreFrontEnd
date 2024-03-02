import React from "react";
import "./AboutUsPage.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <p className="about-paragraph">
        Welcome to our platform dedicated to footwear enthusiasts! At Bae Shoesy
        Store, we're passionate about connecting individuals with their perfect
        pair of shoes. Whether you're a trendsetter, a sneakerhead, or someone
        simply seeking quality footwear, we're here to cater to your needs.
      </p>
      <img
        src="https://lh3.googleusercontent.com/p/AF1QipO7811aeFMERCFMLlcAtumw-q-6j_uEJ5lfQQDw=w1080-h608-p-no-v0"
        alt="About Us"
        className="about-image"
      />
      <ul className="about-list">
        <br></br>
        <li className="about-list-item">
          Our journey began with a vision to revolutionize the way people shop
          for shoes. With a commitment to offering an extensive selection of
          styles, brands, and sizes, we strive to make every step of your
          shopping experience enjoyable and hassle-free.
        </li>
        <li className="about-list-item">
          Driven by a love for fashion and a dedication to customer
          satisfaction, we aim to create a vibrant community where shoe lovers
          can explore, discover, and express their unique style. From classic
          designs to the latest trends, our curated collection ensures that
          there's something for everyone.
        </li>
        <li className="about-list-item">
          As we continue to grow and evolve, we remain steadfast in our mission
          to provide exceptional products and service. Thank you for joining us
          on this exciting journey. Let's step into the world of footwear
          together!
        </li>
        <b><p className="about-list-item">Auctioning Second-Hand Shoes:</p></b>
      </ul>
      <p className="about-paragraph">
        Looking for an exhilarating way to acquire unique and sought-after
        shoes? Dive into the world of shoe auctions on our platform. Our auction
        feature allows you to bid on a wide range of second-hand shoes, from
        rare collectibles to popular styles, all from the comfort of your home.
        Participating in shoe auctions adds an element of excitement and
        competition to your shopping experience. Whether you're hunting for a
        specific pair or simply enjoy the thrill of bidding, our platform offers
        you access to an ever-changing selection of footwear. Bid with
        confidence knowing that each pair of shoes has been carefully vetted for
        authenticity and quality. With our secure bidding process and
        transparent auction rules, you can shop with peace of mind and immerse
        yourself in the excitement of the auction floor. Join us in discovering
        the joy of shoe auctions and add unique pieces to your collection today.
      </p>
      <p className="about-paragraph">
        For more information, please visit our{" "}
        <a href="#" className="about-link">
          website
        </a>
        .
      </p>
    </div>
  );
};

export default AboutUs;
