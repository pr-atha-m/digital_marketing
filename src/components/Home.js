import React from "react";
import digital from "./icons/digital.png";
import "./Styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// Import CSS file for styling
import { Link } from "react-router-dom";

const Home = () => (
  <section id="home">
    <div className="home-container">
      <div className="left-content">
        <h1>YOUR DIGITAL MARKETING PARTNER</h1>
        <p>Your one-stop solution for all your marketing needs</p>
        <button className="contact-button">
          <FontAwesomeIcon icon={faPhone} />
          <Link to="#contact">Contact Us</Link>
        </button>
      </div>
      <div className="right-content">
        <img src={digital} alt="Digital Marketing" />
      </div>
    </div>
  </section>
);

export default Home;
