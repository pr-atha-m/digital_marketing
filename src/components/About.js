// src/components/AboutUs.js
import React from "react";
import "./Styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-us">
      <div className="about-us-details">
        <h2>About Us</h2>
        <div className="about-us-cards">
          <div className="about-us-card">
            <div className="card-image strategy"></div>
            <div className="card-heading">STRATEGY</div>
            <div className="card-hover-text">
              <p>
                We align your brand with your business vision, using a
                research-driven methodology and creative advocacy to craft
                winning strategies.
              </p>
            </div>
          </div>
          <div className="about-us-card">
            <div className="card-image creation"></div>
            <div className="card-heading">CREATION</div>
            <div className="card-hover-text">
              <p>
                We bring your brand to life through visual identity, promotional
                campaigns, web design, and creative content.
              </p>
            </div>
          </div>
          <div className="about-us-card">
            <div className="card-image performance"></div>
            <div className="card-heading">PERFORMANCE</div>
            <div className="card-hover-text">
              <p>
                We execute your strategy and creation goals, helping you gain a
                competitive advantage and achieve profitable growth.
              </p>
            </div>
          </div>
        </div>
        <p className="text">
          Our team of seasoned thinkers, writers, and designers is dedicated to
          transforming your business goals into focused brand strategies. We
          nurture our clients with care and responsibility, helping them thrive
          like youthful bees. Together, we'll launch your brand with a unique
          identity that stands out. With a bold, honest, and imaginative
          approach, we deliver the sweet results our clients crave, building
          lasting relationships on the wings of creativity.
        </p>
      </div>
    </section>
  );
};

export default About;
