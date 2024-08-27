import React, { useState } from "react";
import "./Styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import Popup from "./Popup";

const Contact = () => {
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cwkhqeu",
        "template_3tkinno",
        e.target,
        "pLb6hU2JSVKZhnSU7"
      )
      .then(
        (result) => {
          setPopup({
            show: true,
            message: "Message sent successfully!",
            type: "success",
          });
        },
        (error) => {
          console.log(error.text);
          setPopup({
            show: true,
            message: "An error occurred, please try again.",
            type: "error",
          });
        }
      );
    e.target.reset();
  };

  const closePopup = () => setPopup({ ...popup, show: false });

  return (
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
                Phone: <a href="tel:+1234567890">+91 7972911849</a>
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
                Office:
                <span style={{ marginLeft: "10px" }}>Nagpur & Delhi</span>
              </p>
            </div>
            <div className="contact-form">
              <form onSubmit={sendEmail}>
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
      {popup.show && (
        <Popup message={popup.message} type={popup.type} onClose={closePopup} />
      )}
    </section>
  );
};

export default Contact;
