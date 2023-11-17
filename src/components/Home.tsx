// src/components/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // Make sure to import your styles

const Home: React.FC = () => (
  <div className="home-content">
    <h1>Welcome to [Your Company Name]</h1>

    <p>
      Your Gateway to Exciting Opportunities in the Pharmaceutical Industry! At
      [Your Company Name], we are committed to connecting talented individuals
      with rewarding careers and providing top-notch training programs in the
      pharmaceutical sector.
    </p>

    <section>
      <h2>About Us</h2>
      <p>
        [Your Company Name] is a leading platform dedicated to shaping the
        future of the pharmaceutical industry. Our mission is to empower
        individuals with the knowledge and opportunities needed for success.
      </p>
    </section>

    <section>
      <h2>Explore Our Services</h2>

      <div>
        <h3>1. Pharmaceutical Job Openings</h3>
        <p>
          Discover a wide range of job opportunities in the pharmaceutical
          sector. We partner with leading companies to bring you the latest job
          openings in research, development, manufacturing, and more.
        </p>
      </div>

      <div>
        <h3>2. Training and Development Programs</h3>
        <p>
          Stay ahead in your pharmaceutical career with our comprehensive
          training programs. Our courses cover the latest industry trends,
          regulatory requirements, and cutting-edge technologies.
        </p>
      </div>
    </section>

    <section>
      <h2>Why Choose [Your Company Name]?</h2>

      <ul>
        <li>
          <strong>Industry Expertise:</strong> Benefit from our deep
          understanding of the pharmaceutical sector for targeted job placements
          and relevant training.
        </li>
        <li>
          <strong>Quality Partnerships:</strong> We collaborate with reputable
          pharmaceutical companies and training institutions to ensure the best
          opportunities and education.
        </li>
        <li>
          <strong>Career Support:</strong> Our commitment goes beyond job
          placement. We offer ongoing support and resources to help you advance
          your pharmaceutical career.
        </li>
      </ul>
    </section>

    <section>
      <h2>Get Started Today!</h2>
      <p>
        Explore our job listings, browse our training programs, and take the
        first step towards a successful career in the pharmaceutical industry.
        Join [Your Company Name] and embark on a journey of growth, learning,
        and achievement.
      </p>

      <Link to="/jobs" className="cta-button">
        Explore Job Openings
      </Link>
    </section>
  </div>
);

export default Home;
