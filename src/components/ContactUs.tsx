// src/components/ContactUs.tsx
import React from "react";
import "../styles.css";

const ContactUs: React.FC = () => (
  <div className="contact-us-content">
    <h2>Contact Us</h2>
    <p>Have questions? Reach out to us using the form below:</p>

    <form className="contact-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Your Name" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Your Email" />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        placeholder="Your Message"
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  </div>
);

export default ContactUs;
