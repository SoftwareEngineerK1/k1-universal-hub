import React from "react";
import makeupAndMimosasImg from "../assets/makeupandmimosas2.jpeg";

const MakeupAndMimosas = () => (
  <div style={{ padding: "40px", textAlign: "center" }}>
    <h1>Makeup and Mimosas</h1>
    <p>Beauty, Fun, and a Splash of Life.</p>
    <img src={makeupAndMimosasImg} alt="Makeup and Mimosas" style={{ maxWidth: "300px", borderRadius: "15px" }} />
  </div>
);

export default MakeupAndMimosas;
