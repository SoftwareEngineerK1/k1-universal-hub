import React from "react";
import k1CleaningImg from "../assets/k1cleaning.jpeg";

const K1Cleaning = () => (
  <div style={{ padding: "40px", textAlign: "center" }}>
    <h1>K1Cleaning</h1>
    <p>Clean Spaces. Happy Faces.</p>
    <img src={k1CleaningImg} alt="K1Cleaning" style={{ maxWidth: "300px", borderRadius: "15px" }} />
  </div>
);

export default K1Cleaning;
