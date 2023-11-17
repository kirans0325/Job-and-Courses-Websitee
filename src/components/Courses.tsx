// src/components/Courses.tsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // Make sure to import your styles

const Courses: React.FC = () => {
  // Mock data for courses
  const courses = [
    {
      id: 1,
      title: "Introduction to Pharmaceutical Quality Assurance",
      description:
        "Explore the fundamentals of quality assurance in the pharmaceutical industry.",
    },
    {
      id: 2,
      title: "Advanced GMP (Good Manufacturing Practices)",
      description:
        "Gain in-depth knowledge of GMP regulations and their application in pharmaceutical manufacturing.",
    },
    {
      id: 3,
      title: "Process Engineering in Pharmaceutical Manufacturing",
      description:
        "Learn the principles and techniques of process engineering for pharmaceutical production.",
    },
    // Add more courses as needed
  ];

  return (
    <div className="courses-content">
      <h1>Pharmaceutical Quality Assurance and Process Engineering Courses</h1>

      <section>
        <h2>Featured Courses</h2>
        <div className="course-listings">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <Link
                to={`/courses/${course.id}`}
                className="course-details-link"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>All Courses</h2>
        <ul className="all-course-listings">
          {courses.map((course) => (
            <li key={course.id}>
              <Link to={`/courses/${course.id}`} className="course-title-link">
                {course.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="explore-more">
        Explore our comprehensive courses to enhance your skills in
        pharmaceutical quality assurance and process engineering.{" "}
        <Link to="/contact" className="cta-button">
          Contact Us
        </Link>{" "}
        for inquiries or assistance.
      </p>
    </div>
  );
};

export default Courses;
