// src/components/About.tsx
import React from "react";
import "../styles.css"; // Make sure to import your styles

const About: React.FC = () => (
  <div className="about-content">
    <h1>About [Your Company Name]</h1>

    <p>
      [Your Company Name] is a visionary player in the pharmaceutical industry,
      committed to driving excellence, innovation, and growth. With a passion
      for shaping the future of healthcare, we have established ourselves as a
      leading platform connecting talent with opportunities and providing
      cutting-edge training solutions.
    </p>

    <section>
      <h2>Our Mission</h2>
      <p>
        At [Your Company Name], our mission is to empower individuals to excel
        in the pharmaceutical field. We strive to create a dynamic ecosystem
        that fosters career development, learning, and collaboration.
      </p>
    </section>

    <section>
      <h2>Our Values</h2>
      <p>
        - <strong>Innovation:</strong> We embrace innovation to stay at the
        forefront of industry advancements.
      </p>
      <p>
        - <strong>Integrity:</strong> We uphold the highest ethical standards in
        all our interactions.
      </p>
      <p>
        - <strong>Collaboration:</strong> We believe in the power of
        collaboration and teamwork to achieve shared goals.
      </p>
      <p>
        - <strong>Excellence:</strong> We are dedicated to delivering excellence
        in all aspects of our work.
      </p>
    </section>

    <section>
      <h2>Why Choose [Your Company Name]?</h2>
      <p>
        - <strong>Industry Expertise:</strong> Our team comprises industry
        experts with a deep understanding of pharmaceutical trends and
        requirements.
      </p>
      <p>
        - <strong>Community:</strong> Join a community of like-minded
        professionals and organizations committed to advancing the
        pharmaceutical sector.
      </p>
      <p>
        - <strong>Impact:</strong> Be part of an organization that makes a
        positive impact on individuals' careers and the industry as a whole.
      </p>
    </section>

    <section>
      <h2>Join Us in Shaping the Future</h2>
      <p>
        Whether you are a job seeker looking for exciting opportunities or a
        professional seeking advanced training, [Your Company Name] welcomes you
        to join us on our journey of growth, innovation, and success.
      </p>
    </section>
  </div>
);

export default About;
