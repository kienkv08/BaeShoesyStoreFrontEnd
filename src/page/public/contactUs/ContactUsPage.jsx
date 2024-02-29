import React from "react";
import "./ContactUsPage.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <section className="contact-info">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-paragraph">
          We'd love to hear from you! Reach out to us using the information
          below:
        </p>
        <ul className="contact-list">
          <li className="contact-list-item">
            <strong>Email:</strong> info@example.com
          </li>
          <li className="contact-list-item">
            <strong>Phone:</strong> +1234567890
          </li>
          <li className="contact-list-item">
            <strong>Address:</strong> 123 Street, City, Country
          </li>
        </ul>
      </section>

      <section className="contact-form">
        <h2 className="contact-subheading">Send us a Message</h2>
        <form className="form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;