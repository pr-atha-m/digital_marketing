import React from "react";
import digital from "./icons/digital.png";
import "./Styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// Import CSS file for styling
import { Link } from "react-router-dom";

const Home = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/7972911849", "_blank");
  };

  return (
    <section id="home">
      <div className="home-container">
        <div className="left-content">
          <h1>YOUR DIGITAL MARKETING PARTNER</h1>
          <p>One-stop solution for all your marketing needs</p>
          <div className="button-container">
            <button className="whatsapp-button" onClick={handleWhatsAppClick}>
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ marginRight: "8px" }}
              />
              Contact Us
            </button>
          </div>
        </div>
        <div className="right-content">
          <img src={digital} alt="Digital Marketing" />
        </div>
      </div>
    </section>
  );
};

export default Home;
