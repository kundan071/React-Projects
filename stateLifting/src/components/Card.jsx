import React from "react";
import './Card.css'; // Import the CSS

const Card = (props) => {
  return (
    <div className="card-container">
      <input type="text" onChange={(e) => props.setName(e.target.value)} placeholder="Enter your name" />
      <p>Value Inside Child Card: {props.name}</p>
    </div>
  );
};

export default Card;
