// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-links">
        <Link to="/" className="footer-link">
          Home
        </Link>
        <Link to="/jobs" className="footer-link">
          Jobs
        </Link>
        <Link to="/courses" className="footer-link">
          Courses
        </Link>
        <Link to="/blog" className="footer-link">
          Blog
        </Link>
        <Link to="/about" className="footer-link">
          About
        </Link>
        <Link to="/contact" className="footer-link">
          Contact Us
        </Link>
      </div>
      <p>&copy; 2023 [Your Company Name]. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
