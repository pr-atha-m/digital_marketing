import React from "react";
import Slider from "react-slick";
import "./Styles/Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    name: "Social Media Management",
    icon: <FontAwesomeIcon icon={faFacebook} />,
  },
  {
    name: "Influencer Marketing",
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
  { name: "AD Campaign Handling", icon: <FontAwesomeIcon icon={faTwitter} /> },
  {
    name: "Content Writing/ Graphic Designing",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  {
    name: "Promote Services and Business",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
  },
  {
    name: "Event And Ceremony Participation",
    icon: <FontAwesomeIcon icon={faMapMarkerAlt} />,
  },
  { name: "Festive Posts", icon: <FontAwesomeIcon icon={faPhone} /> },
  { name: "PR Campaigns", icon: <FontAwesomeIcon icon={faTwitter} /> },
  { name: "SEO", icon: <FontAwesomeIcon icon={faInstagram} /> },
  { name: "Monthly Reports", icon: <FontAwesomeIcon icon={faFacebook} /> },
];

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="services">
      <h2>Our Services</h2>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.name}</h3>
            <p>We manage your {service.name.toLowerCase()} effectively.</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        padding: "10px",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#80AF81",
        borderRadius: "50%",
        padding: "10px",
      }}
      onClick={onClick}
    />
  );
};

export default Services;
