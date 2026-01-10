import React from "react";
import { Link } from "react-router-dom";
import "./Brand-Card.css"; // We'll move CSS here

const BrandCard = ({ image, name, tagline, category, link }) => {
  return (
    <Link to={link} className="brand-link">
      <div className="brand-card">
        <div className={`logo ${category}`}>
          <img src={image} alt={`${name} Logo`} />
        </div>
        <div className="brand-name">{name}</div>
        <div className="tagline">{tagline}</div>
      </div>
    </Link>
  );
};

export default BrandCard;
