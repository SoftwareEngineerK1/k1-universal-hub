import React from "react";
import businessInBlackImg from "../assets/businessinblack.jpeg";

const BusinessInBlack = () => (
  <div style={{ padding: "40px", textAlign: "center" }}>
    <h1>BUSINESS IN BLACK</h1>
    <p>Building Smarter Businesses with Technology.</p>
    <img src={businessInBlackImg} alt="Business In Black" style={{ maxWidth: "300px", borderRadius: "15px" }} />
  </div>
);

export default BusinessInBlack;
