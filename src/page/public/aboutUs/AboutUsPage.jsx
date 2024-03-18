import React from "react";
import "./AboutUsPage.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <p className="about-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et finibus
        lectus, id tempus turpis. Vivamus maximus nisi et nunc maximus, vitae
        pharetra odio ultricies. Donec convallis lacus sed ultricies viverra.
      </p>
      <img src="about-image.jpg" alt="About Us" className="about-image" />
      <ul className="about-list">
        <li className="about-list-item">Lorem ipsum dolor sit amet</li>
        <li className="about-list-item">Consectetur adipiscing elit</li>
        <li className="about-list-item">Sed et finibus lectus</li>
        <li className="about-list-item">
          Vivamus maximus nisi et nunc maximus
        </li>
      </ul>
      <p className="about-paragraph">
        Nulla facilisi. Integer nec nisi nec felis tincidunt tempus vel sit amet
        urna. Donec molestie augue nec nisi efficitur, nec suscipit neque
        vehicula. Nunc sit amet ultricies lorem.
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
