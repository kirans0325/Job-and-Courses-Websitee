// src/components/Jobs.tsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // Make sure to import your styles

const Jobs: React.FC = () => {
  // Mock data for job listings
  const jobListings = [
    {
      id: 1,
      title: "Pharmaceutical Research Scientist",
      location: "New York, NY",
      description:
        "Conduct research to develop new pharmaceutical products and improve existing ones.",
    },
    {
      id: 2,
      title: "Quality Assurance Specialist",
      location: "San Francisco, CA",
      description:
        "Ensure compliance with regulatory standards and maintain high-quality standards in production.",
    },
    {
      id: 3,
      title: "Manufacturing Technician",
      location: "Boston, MA",
      description:
        "Operate and maintain pharmaceutical manufacturing equipment.",
    },
    // Add more job listings as needed
  ];

  return (
    <div className="jobs-content">
      <h1>Pharmaceutical Job Openings</h1>

      <section>
        <h2>Featured Jobs</h2>
        <div className="job-listings">
          {jobListings.map((job) => (
            <div className="job-card" key={job.id}>
              <h3>{job.title}</h3>
              <p className="job-location">{job.location}</p>
              <p>{job.description}</p>
              <Link to={`/jobs/${job.id}`} className="job-details-link">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>All Job Listings</h2>
        <ul className="all-job-listings">
          {jobListings.map((job) => (
            <li key={job.id}>
              <Link to={`/jobs/${job.id}`} className="job-title-link">
                {job.title} - {job.location}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="explore-more">
        Explore more opportunities and start your journey in the pharmaceutical
        industry.{" "}
        <Link to="/contact" className="cta-button">
          Contact Us
        </Link>{" "}
        for inquiries or assistance.
      </p>
    </div>
  );
};

export default Jobs;
