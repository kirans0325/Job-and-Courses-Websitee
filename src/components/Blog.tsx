// src/components/Blog.tsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // Make sure to import your styles

const Blog: React.FC = () => {
  // Realistic data for pharmaceutical blog posts
  const blogPosts = [
    {
      id: 1,
      title: "The Role of Quality Assurance in Ensuring Drug Safety",
      content: `
        Quality assurance is a critical component of pharmaceutical manufacturing to ensure the safety and efficacy of drugs. 
        This post explores the key responsibilities of quality assurance professionals and their impact on the pharmaceutical industry.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (Lengthy content)
      `,
    },
    {
      id: 2,
      title: "Implementing Process Validation in Pharmaceutical Production",
      content: `
        Process validation is a crucial step in pharmaceutical production to guarantee the consistency and reliability of manufacturing processes.
        Learn about the principles of process validation and its application in the development of pharmaceutical products.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (Lengthy content)
      `,
    },
    {
      id: 3,
      title: "Quality Control Techniques for Biopharmaceuticals",
      content: `
        Biopharmaceuticals present unique challenges in quality control due to their complex nature. This post discusses the specialized techniques 
        and analytical methods used to ensure the quality of biopharmaceutical products.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (Lengthy content)
      `,
    },
    {
      id: 4,
      title: "Emerging Trends in Pharmaceutical Process Engineering",
      content: `
        Stay updated on the latest trends in pharmaceutical process engineering. From continuous manufacturing to the integration of advanced technologies, 
        discover how process engineering is evolving to meet the demands of the modern pharmaceutical landscape.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (Lengthy content)
      `,
    },
    {
      id: 5,
      title: "Ensuring Data Integrity in Pharmaceutical Quality Systems",
      content: `
        Data integrity is a critical aspect of maintaining quality in pharmaceutical operations. Explore the importance of data integrity 
        in quality systems and the measures to prevent and address data integrity issues.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (Lengthy content)
      `,
    },
    // Add more realistic blog posts as needed
  ];

  return (
    <div className="blog-content">
      <h1>Pharmaceutical Quality and Process Engineering Blog</h1>

      <section>
        <h2>Latest Posts</h2>
        <div className="blog-posts">
          {blogPosts.map((post) => (
            <div className="blog-post" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content.substring(0, 150)}...</p>
              <Link to={`/blog/${post.id}`} className="read-more-link">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>All Blog Posts</h2>
        <ul className="all-blog-posts">
          {blogPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/blog/${post.id}`} className="post-title-link">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="explore-more">
        Dive into our blog to explore in-depth articles on pharmaceutical
        quality assurance and process engineering.{" "}
        <Link to="/contact" className="cta-button">
          Contact Us
        </Link>{" "}
        for any inquiries or to share your thoughts.
      </p>
    </div>
  );
};

export default Blog;
