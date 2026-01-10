import React from "react";
import beyondTheSpineImg from "../assets/beyondthespine.jpeg";

const BeyondTheSpine = () => (
  <div style={{ padding: "40px", textAlign: "center" }}>
    <h1>Beyond the Spine</h1>
    <p>Read. Reflect. Grow.</p>
    <img src={beyondTheSpineImg} alt="Beyond the Spine" style={{ maxWidth: "300px", borderRadius: "15px" }} />
  </div>
);

export default BeyondTheSpine;
