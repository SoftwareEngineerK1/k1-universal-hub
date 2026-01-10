import React from "react";
import tmeExperienceImg from "../assets/tmeexperience.jpeg";

const TMEExperience = () => (
  <div style={{ padding: "40px", textAlign: "center" }}>
    <h1>TME Experience</h1>
    <p>Fresh, Flavorful, Fueled by Culture.</p>
    <img src={tmeExperienceImg} alt="TME Experience" style={{ maxWidth: "300px", borderRadius: "15px" }} />
  </div>
);

export default TMEExperience;
