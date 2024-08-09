import React from "react";
import "./Styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => (
  <section id="contact">
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-header">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-content">
          <div className="contact-details">
            <p>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              Phone: <a href="tel:+1234567890">+1 234 567 890</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              Email:{" "}
              <a href="mailto:mbdigitalcreations@gmail.com">
                mbdigitalcreations@gmail.com
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              Address: Friends Colony Katol Road, Nagpur
            </p>
          </div>
          <div className="contact-form">
            <form>
              <div className="input-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
