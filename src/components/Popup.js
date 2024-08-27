import React from "react";

const Popup = ({ message, type, onClose }) => {
  const popupStyle = {
    position: "fixed",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: type === "success" ? "#91DDCF" : "#F19ED2", // Green for success, red for error
    color: "#fff",
    zIndex: 1000,
  };

  const buttonStyle = {
    backgroundColor: "#fff",
    color: type === "success" ? "#00796b" : "#d32f2f",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={popupStyle}>
      <p>{message}</p>
      <button style={buttonStyle} onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Popup;
