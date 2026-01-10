import React from "react";
import bmoreFoodiesImg from "../assets/bmorefoodies.jpeg";

const BmoreFoodies = () => (
  <div style={{ padding: "40px", textAlign: "center" }}>
    <h1>BmoreFoodies</h1>
    <p>Taste Baltimore. Taste the World.</p>
    <img src={bmoreFoodiesImg} alt="BmoreFoodies" style={{ maxWidth: "300px", borderRadius: "15px" }} />
  </div>
);

export default BmoreFoodies;
