import React from "react";
import "./Styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section contact-info">
        <h2>Contact Us</h2>
        <p>
          <FontAwesomeIcon icon={faPhone} className="icon" />
          +1 234 567 890
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          info@example.com
        </p>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          1234 Street Name, City, State, ZIP
        </p>
      </div>
      <div className="footer-section follow-us">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
